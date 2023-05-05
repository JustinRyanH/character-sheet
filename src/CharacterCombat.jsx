import { Header, Stack } from "@mantine/core";
import { GeneralCombat } from "./GeneralCombat.jsx";
import { CombatHealth } from "./CombatHealth.jsx";
import { CombatDeath } from "./CombatDeath.jsx";

export function CharacterCombat() {
    return <Stack aria-labelledby="combat-stats">
        <GeneralCombat/>
        <CombatHealth/>
        <CombatDeath/>
        <Header id="combat-stats" level={2}>Combat Stats</Header>
    </Stack>;
}
