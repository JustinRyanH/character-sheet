import { Header, Stack, TextInput } from "@mantine/core";

export function Attributes() {
    return <Stack aria-labelledby="attributes">
        <TextInput label="Strength"/>
        <TextInput label="Dexterity"/>
        <TextInput label="Constitution"/>
        <TextInput label="Intelligence"/>
        <TextInput label="Wisdom"/>
        <TextInput label="Charisma"/>
        <Header level={2} id="attributes">Attributes</Header>
    </Stack>;
}
