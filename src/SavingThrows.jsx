import { Header, Stack, TextInput } from "@mantine/core";

export function SavingThrows() {
    return <Stack aria-labelledby="saving-throws">
        <TextInput size="xs" label="Strength"/>
        <TextInput size="xs" label="Dexterity"/>
        <TextInput size="xs" label="Constitution"/>
        <TextInput size="xs" label="Intelligence"/>
        <TextInput size="xs" label="Wisdom"/>
        <TextInput size="xs" label="Charisma"/>
        <Header level={2} id="saving-throws">Saving Throws</Header>
    </Stack>;
}
