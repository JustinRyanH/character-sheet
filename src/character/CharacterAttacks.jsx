import { Header, Stack, Table } from "@mantine/core";

export function CharacterAttacks() {
    return <Stack aria-labelledby="attacks-and-spells">
        <Table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Atk Bonus</th>
                <th>Damage/Type</th>
            </tr>
            </thead>
        </Table>
        <Header id="attacks-and-spells" level={2}>Attacks and Spellcasting</Header>
    </Stack>;
}
