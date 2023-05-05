import { Group, Header } from "@mantine/core";

export function CombatDeath() {
    return <Group>
        <div aria-labelledby="hit-dice">
            <Header id="hit-dice" level={3}>Hit Dice</Header>
        </div>
        <div aria-labelledby="death-saves">
            <Header id="death-saves" level={3}>Death Saves</Header>
        </div>
    </Group>;
}
