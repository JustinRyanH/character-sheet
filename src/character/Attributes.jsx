import { Header, Stack, TextInput } from "@mantine/core";
import { Attribute } from "./Attribute.jsx";


export function Attributes() {
    return <Stack aria-labelledby="attributes">
        <Header level={2} id="attributes">Attributes</Header>
        <Attribute label="Strength"/>
        <TextInput label="Dexterity"/>
        <TextInput label="Constitution"/>
        <TextInput label="Intelligence"/>
        <TextInput label="Wisdom"/>
        <TextInput label="Charisma"/>
    </Stack>;
}
