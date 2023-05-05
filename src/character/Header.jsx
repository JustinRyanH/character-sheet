import { Grid, TextInput } from "@mantine/core";

export function Header() {
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
