import { Header, Stack, TextInput, Text, Group } from "@mantine/core";

// eslint-disable-next-line react/prop-types
function Attribute({ label }) {
    return <Stack>
        <TextInput label={label} />
        <Group position="center">
            <Text aria-label={`${label} Modifier`}>+1</Text>
        </Group>
    </Stack>
}


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
