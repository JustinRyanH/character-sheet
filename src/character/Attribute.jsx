// eslint-disable-next-line react/prop-types
import { Group, Stack, Text, TextInput } from "@mantine/core";


// We have Value
// That value results in a modifier
// The modifier is derived from `(ability / 2) -5`
export function Attribute({ label }) {
    return <Stack>
        <TextInput label={label}/>
        <Group position="center">
            <Text aria-label={`${label} Modifier`}>+1</Text>
        </Group>
    </Stack>
}
