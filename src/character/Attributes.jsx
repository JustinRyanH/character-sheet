import { Header, Stack, TextInput } from "@mantine/core";

function Attribute({ label }) {
    return <TextInput label="Strength"/>
}


export function Attributes() {
    return <Stack aria-labelledby="attributes">
        <Attribute label="Strength"/>
        <TextInput label="Dexterity"/>
        <TextInput label="Constitution"/>
        <TextInput label="Intelligence"/>
        <TextInput label="Wisdom"/>
        <TextInput label="Charisma"/>
        <Header level={2} id="attributes">Attributes</Header>
    </Stack>;
}
