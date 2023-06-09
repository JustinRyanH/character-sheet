import { Header, Stack, TextInput } from "@mantine/core";
import React from "react";
import { useAttribute } from "../App.jsx";

function Skill({ attribute, label }) {
    const { modifier } = useAttribute(attribute);

    return <TextInput size="xs" label={label} value={modifier} onChange={() => {}} />
}

export function Skills() {
    return <Stack aria-labelledby="skills">
        <TextInput size="xs" label="Acrobatics"/>
        <TextInput size="xs" label="Animal Handling"/>
        <TextInput size="xs" label="Arcana"/>
        <Skill attribute="strength"  size="xs" label="Athletics"/>
        <TextInput size="xs" label="Deception"/>
        <TextInput size="xs" label="History"/>
        <TextInput size="xs" label="Insight"/>
        <TextInput size="xs" label="Intimidation"/>
        <TextInput size="xs" label="Investigation"/>
        <TextInput size="xs" label="Medicine"/>
        <TextInput size="xs" label="Nature"/>
        <TextInput size="xs" label="Perception"/>
        <TextInput size="xs" label="Performance"/>
        <TextInput size="xs" label="Persuasion"/>
        <TextInput size="xs" label="Religion"/>
        <TextInput size="xs" label="Sleight of Hand"/>
        <TextInput size="xs" label="Stealth"/>
        <TextInput size="xs" label="Survival"/>
        <Header level={2} id="skills">Skills</Header>
    </Stack>;
}
