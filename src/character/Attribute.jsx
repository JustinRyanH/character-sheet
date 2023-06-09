// eslint-disable-next-line react/prop-types
import { Group, Stack, Text, TextInput } from "@mantine/core";

export function Attribute({ label }) {
    return <Stack>
        <TextInput label={label}/>
        <Group position="center">
            <Text aria-label={`${label} Modifier`}>+1</Text>
        </Group>
    </Stack>
}
