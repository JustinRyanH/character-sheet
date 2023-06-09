import React from 'react';
import { Group, NumberInput, Stack, Text } from "@mantine/core";


// We have Value
// That value results in a modifier
// The modifier is derived from `(ability / 2) -5`
// eslint-disable-next-line react/prop-types
export function Attribute({ attribute, setAttribute, label, value: initialValue }) {
    const [value, setValue] = React.useState(initialValue);
    const onChange = (value) => {
        setValue(value);
        setAttribute(attribute, value);
    }
    const modifier = Math.floor((value / 2) - 5);
    const sign = Math.sign(modifier);
    let displaySign = sign === 1 ? '+' : '-';
    if (sign === 0) displaySign = ''
    return <Stack>
        <NumberInput label={label} value={value} onChange={onChange} />
        <Group position="center">
            <Text aria-label={`${label} Modifier`}>{displaySign}{Math.abs(modifier)}</Text>
        </Group>
    </Stack>
}
