import { Header, Stack, TextInput } from "@mantine/core";
import { Attribute } from "./Attribute.jsx";
import { useAttributes } from "../App.jsx";


// eslint-disable-next-line react/prop-types
export function Attributes() {
    const {attributes, updateAttribute } = useAttributes();
    return <Stack aria-labelledby="attributes">
        <Header level={2} id="attributes">Attributes</Header>
        <Attribute
            attribute="strength"
            value={attributes.strength || 10}
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
