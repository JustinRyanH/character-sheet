import React from 'react';
import { Header, Stack, TextInput } from "@mantine/core";
import { Attribute } from "./Attribute.jsx";
import { CharacterContext } from "../App.jsx";


// eslint-disable-next-line react/prop-types
export function Attributes() {
    const { attributes: characterAttributes, setAttributes: setCharacterAttributes } = React.useContext(CharacterContext);
    const updateAttribute = (attribute, value) => {
        setCharacterAttributes({
            ...characterAttributes,
            [attribute]: value,
        });
    }
    return <Stack aria-labelledby="attributes">
        <Header level={2} id="attributes">Attributes</Header>
        <Attribute
            attribute="strength"
            value={characterAttributes.strength || 10}
            label="Strength"
            setAttribute={updateAttribute}
        />
        <TextInput label="Dexterity"/>
        <TextInput label="Constitution"/>
        <TextInput label="Intelligence"/>
        <TextInput label="Wisdom"/>
        <TextInput label="Charisma"/>
    </Stack>;
}
