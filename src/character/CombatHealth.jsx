import { Stack, TextInput } from "@mantine/core";

export function CombatHealth() {
    return <Stack>
        <TextInput label="Hit Point Maximum"/>
        <TextInput label="Current Hit Points"/>
        <TextInput label="Temporary Hit Points"/>
    </Stack>;
}
