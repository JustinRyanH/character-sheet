// eslint-disable-next-line react/prop-types
import { Group, NumberInput, Stack, Text } from "@mantine/core";


// We have Value
// That value results in a modifier
// The modifier is derived from `(ability / 2) -5`
// eslint-disable-next-line react/prop-types
export function Attribute({ label, value }) {
    const modifier = Math.floor((value / 2) - 5);
    const sign = Math.sign(modifier);
    let displaySign = sign === 1 ? '+' : '-';
    if (sign === 0) displaySign = ''
    return <Stack>
        <NumberInput label={label} defaultValue={value} />
        <Group position="center">
            <Text aria-label={`${label} Modifier`}>{displaySign}{Math.abs(modifier)}</Text>
        </Group>
    </Stack>
}
