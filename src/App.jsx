import React from 'react';
import { Grid, Group, Stack, TextInput } from "@mantine/core";
import {
    Attack,
    Attributes,
    Combat,
    Header as CharacterHeader,
    Skills,
    SavingThrows
} from "./character";

class ValueObserver {
    constructor(initialValue) {
        this.value = initialValue;
        this.callbacks = [];
    }

    set(value) {
        this.value = value;
        this.callbacks.forEach((callback) => callback(value));
    }

    get() {
        return this.value;
    }

    observe(callback) {
        this.callbacks.push(callback);
    }

    stop(callback) {
        this.callbacks = this.callbacks.filter((cb) => cb !== callback);
    }
}


function useObservedValue(observer) {
    const [value, setValue] = React.useState(observer.get());

    React.useEffect(() => {
        setValue(observer.get());
        const updateValue = (newValue) => {
            setValue(newValue);
        }

        observer.observe(updateValue);
        return () => observer.stop(updateValue);
    }, [observer]);
    return value;
}
class CharacterSheet {
    #strength = new ValueObserver();
    #attributes = new ValueObserver({});

    get attributes() {
        return this.#attributes;
    }

    get strength() {
        return this.#strength;
    }

    set strength(value) {
        this.#strength.set(value);
    }

    setAttributes(attributes) {
        this.#attributes.set(attributes);
        this.#strength.set(attributes.strength);
    }
}

export const CharacterContext = React.createContext({});

export function CharacterProvider({ children }) {
    const characterSheet = React.useMemo(() => new CharacterSheet(), []);

    const [attributes, setAttributes] = React.useState({
        strength: 10,
    });
    React.useEffect(() => {
        characterSheet.setAttributes(attributes);
    }, [characterSheet, attributes]);
    return <CharacterContext.Provider value={{ attributes, setAttributes, characterSheet }}>
        {children}
    </CharacterContext.Provider>
}

export function useAttribute(name) {
    const { characterSheet } = React.useContext(CharacterContext);
    const value = useObservedValue(characterSheet[name]);
    const modifier = Math.floor((value / 2) - 5);
    return { value, modifier };
}

export function useAttributes() {
    const { setAttributes, characterSheet } = React.useContext(CharacterContext);
    const attributes = useObservedValue(characterSheet.attributes);

    const updateAttribute = (attribute, value) => {
        characterSheet.setAttributes({
            ...attributes,
            [attribute]: value,
        });
    }

    return { attributes, setAttributes, updateAttribute };
}

function App() {
    return (
        <>
            <CharacterProvider>
                <Stack p="2rem">
                    <CharacterHeader/>
                    <Grid>
                        <Grid.Col span={4}>
                            <Group noWrap>
                                <Attributes />
                                <Stack>
                                    <TextInput label="Proficiency Bonus"/>
                                    <SavingThrows/>
                                    <Skills />
                                </Stack>
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Combat/>
                            <Attack/>
                        </Grid.Col>
                        <Grid.Col span={4}></Grid.Col>
                    </Grid>
                </Stack>
            </CharacterProvider>
        </>
    )
}

export default App
