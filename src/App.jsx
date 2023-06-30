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

export const CharacterContext = React.createContext({});

export function CharacterProvider({ children }) {
    const [attributes, setAttributes] = React.useState({
        strength: 10,
    });
    return <CharacterContext.Provider value={{ attributes, setAttributes }}>
        {children}
    </CharacterContext.Provider>
}

export function useAttributes() {
    const { attributes, setAttributes } = React.useContext(CharacterContext);
    const updateAttribute = (attribute, value) => {
        setAttributes({
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
