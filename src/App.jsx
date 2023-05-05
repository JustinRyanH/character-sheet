import { Grid, Group, Header, Stack, TextInput } from "@mantine/core";

function CharacterHeader() {
    return <Grid>
        <Grid.Col span={6}>
            <TextInput styles={{ wrapper: { flexGrow: '1' } }} label="Character Name"/>
        </Grid.Col>
        <Grid.Col span={6}>
            <Grid gutter="xs">
                <Grid.Col span={2}>
                    <TextInput label="Class"/>
                </Grid.Col>
                <Grid.Col span={2}>
                    <TextInput label="Background"/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <TextInput label="Level"/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <TextInput label="Player Name"/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <TextInput label="Race"/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <TextInput label="Alignment"/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <TextInput label="Experience Points"/>
                </Grid.Col>
            </Grid>
        </Grid.Col>
    </Grid>;
}

function App() {
  return (
    <>
        <Stack>
            <CharacterHeader />
            <Grid>
                <Grid.Col span={4}>
                    <Group noWrap>
                        <Stack aria-labelledby="attributes">
                            <TextInput label="Strength" />
                            <TextInput label="Dexterity" />
                            <TextInput label="Constitution" />
                            <TextInput label="Intelligence" />
                            <TextInput label="Wisdom" />
                            <TextInput label="Charisma" />
                            <Header level={2} id="attributes">Attributes</Header>
                        </Stack>
                        <Stack>
                            <TextInput label="Proficiency Bonus" />
                            <Stack aria-labelledby="saving-throws">
                                <TextInput size="xs" label="Strength" />
                                <TextInput size="xs" label="Dexterity" />
                                <TextInput size="xs" label="Constitution" />
                                <TextInput size="xs" label="Intelligence" />
                                <TextInput size="xs" label="Wisdom" />
                                <TextInput size="xs" label="Charisma" />
                                <Header level={2} id="saving-throws">Saving Throws</Header>
                            </Stack>
                            <Stack aria-labelledby="skills">
                                <TextInput size="xs" label="Acrobatics" />
                                <TextInput size="xs" label="Animal Handling" />
                                <TextInput size="xs" label="Arcana" />
                                <TextInput size="xs" label="Athletics" />
                                <TextInput size="xs" label="Deception" />
                                <TextInput size="xs" label="History" />
                                <TextInput size="xs" label="Insight" />
                                <TextInput size="xs" label="Intimidation" />
                                <TextInput size="xs" label="Investigation" />
                                <TextInput size="xs" label="Medicine" />
                                <TextInput size="xs" label="Nature" />
                                <TextInput size="xs" label="Perception" />
                                <TextInput size="xs" label="Performance" />
                                <TextInput size="xs" label="Persuasion" />
                                <TextInput size="xs" label="Religion" />
                                <TextInput size="xs" label="Sleight of Hand" />
                                <TextInput size="xs" label="Stealth" />
                                <TextInput size="xs" label="Survival" />
                                <Header level={2} id="skills">Skills</Header>
                            </Stack>
                        </Stack>
                    </Group>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Stack aria-labelledby="combat-stats">
                        <Group position="apart" noWrap>
                            <TextInput label="Armor Class" />
                            <TextInput label="Initiative" />
                            <TextInput label="Speed" />
                        </Group>
                        <Stack >
                            <TextInput label="Hit Point Maximum" />
                            <TextInput label="Current Hit Points" />
                            <TextInput label="Temporary Hit Points" />
                        </Stack>
                        <Group>
                            <div aria-labelledby="hit-dice">
                                <Header id="hit-dice" level={3}>Hit Dice</Header>
                            </div>
                            <div aria-labelledby="death-saves">
                                <Header id="death-saves" level={3}>Death Saves</Header>
                            </div>
                        </Group>
                        <Header id="combat-stats" level={2}>Combat Stats</Header>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={4}></Grid.Col>

            </Grid>
        </Stack>
    </>
  )
}

export default App
