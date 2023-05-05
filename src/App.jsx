import { Grid, Group, Stack, TextInput } from "@mantine/core";

function Header() {
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
            <Header />
            <Grid>
                <Grid.Col span={4}>
                    <Group>
                        <Stack>
                            <TextInput label="Strength" />
                            <TextInput label="Dexterity" />
                            <TextInput label="Constitution" />
                            <TextInput label="Intelligence" />
                            <TextInput label="Wisdom" />
                            <TextInput label="Charisma" />

                        </Stack>
                    </Group>
                </Grid.Col>
                <Grid.Col span={4}></Grid.Col>
                <Grid.Col span={4}></Grid.Col>

            </Grid>
        </Stack>
    </>
  )
}

export default App
