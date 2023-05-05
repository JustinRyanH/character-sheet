import { Grid, Group, Stack, TextInput } from "@mantine/core";
import { CharacterHeader } from "./CharacterHeader.jsx";
import { CharacterAttributes } from "./CharacterAttributes.jsx";
import { SavingThrows } from "./SavingThrows.jsx";
import { CharacterSkills } from "./CharacterSkills.jsx";
import { CharacterCombat } from "./CharacterCombat.jsx";
import { CharacterAttacks } from "./CharacterAttacks.jsx";

function App() {
    return (
        <>
            <Stack>
                <CharacterHeader/>
                <Grid>
                    <Grid.Col span={4}>
                        <Group noWrap>
                            <CharacterAttributes/>
                            <Stack>
                                <TextInput label="Proficiency Bonus"/>
                                <SavingThrows/>
                                <CharacterSkills/>
                            </Stack>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <CharacterCombat />
                        <CharacterAttacks />
                    </Grid.Col>
                    <Grid.Col span={4}></Grid.Col>
                </Grid>
            </Stack>
        </>
    )
}

export default App
