import { Group, TextInput } from "@mantine/core";

export function GeneralCombat() {
    return <Group position="apart" noWrap>
        <TextInput label="Armor Class"/>
        <TextInput label="Initiative"/>
        <TextInput label="Speed"/>
    </Group>;
}
