// eslint-disable-next-line react/prop-types
import { Group, NumberInput, Stack, Text } from "@mantine/core";


// We have Value
// That value results in a modifier
// The modifier is derived from `(ability / 2) -5`
// eslint-disable-next-line react/prop-types
export function Attribute({ label, value }) {
    const modifier = Math.floor((value / 2) - 5);
    return <Stack>
        <NumberInput label={label} defaultValue={value} />
        <Group position="center">
            <Text aria-label={`${label} Modifier`}>+{modifier}</Text>
        </Group>
    </Stack>
}
