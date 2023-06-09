import React from 'react';
import { Grid, Group, Stack, TextInput } from "@mantine/core";
import {
    Attack,
    Attributes,
    Combat,
    Header as CharacterHeader,
    Skills,
    SavingThrows
} from "./character";

function App() {
    const [attributes, setAttributes] = React.useState({
        strength: 10,
    });
    return (
        <>
            <Stack p="2rem">
                <CharacterHeader />
                <Grid>
                    <Grid.Col span={4}>
                        <Group noWrap>
                            <Attributes attributes={attributes} setAttributes={setAttributes} />
                            <Stack>
                                <TextInput label="Proficiency Bonus"/>
                                <SavingThrows/>
                                <Skills attributes={attributes} />
                            </Stack>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Combat/>
                        <Attack/>
                    </Grid.Col>
                    <Grid.Col span={4}></Grid.Col>
                </Grid>
            </Stack>
        </>
    )
}

export default App
