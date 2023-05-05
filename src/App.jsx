import { Grid, Group, Stack, TextInput } from "@mantine/core";
import {
    CharacterAttacks,
    CharacterAttributes,
    CharacterCombat,
    CharacterHeader,
    CharacterSkills,
    SavingThrows
} from "./character";

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
