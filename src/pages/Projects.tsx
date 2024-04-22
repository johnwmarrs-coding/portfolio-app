import { Title, Grid, Card, Image, Button } from '@mantine/core';
import { Anchor, Group, Text, Flex } from '@mantine/core';
import projects_dog from '../assets/projects_dog.png';
function Projects() {
    return (
        <Grid ta={'left'}>
            <Grid.Col span={{ base: 12, md: 6, lg: 8}}>
                <h1>Projects</h1>
                <Text>The following are some personal and hobby projects I've done throughout the years. 
                    This definitely isn't all that I have worked on, though, as most of my programming
                    has been done academically and professionally. 
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4}}>
                <Image src={projects_dog} radius="md" mah={400} fit={'contain'}></Image>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h={'100%'}>
                    <h2>Fisico</h2>
                    <Text size="sm" c="dimmed">
                        Unlike most portfiolios, this one isn't designed to showcase my top-notch frontend skills 
                        (although I do quite alright in that regard too). Instead it's to demonstrate a mature and
                        flushed out DevOps pipeline from code to delivery. While what you are seeing on screen
                        may seem like a simple web-app, there is a lot going on behind the seems designed to 
                        mimic a cloud-based enterprise application development environment. 
                    </Text>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h={'100%'}>
                    <h2>Jaspa</h2>
                    <Text size="sm" c="dimmed">
                        Unlike most portfiolios...
                    </Text>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h={'100%'}>
                    <h2>AI Flight</h2>
                    <Text size="sm" c="dimmed">
                        Unlike most portfiolios, this one isn't designed to showcase my top-notch frontend skills 
                        (although I do quite alright in that regard too). Instead it's to demonstrate a mature and
                        flushed out DevOps pipeline from code to delivery. While what you are seeing on screen
                        may seem like a simple web-app, there is a lot going on behind the seems designed to 
                        mimic a cloud-based enterprise application development environment. 
                    </Text>
                    <Anchor href="https://github.com/johnwmarrs-coding/AiFlight" target="_blank" ><Button variant={'outline'} w={'150px'}>View on Github</Button></Anchor>
                </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h={'100%'}>
                    <h2>BMES Member Point Tracker</h2>
                    <Text size="sm" c="dimmed">
                        Academic project for a senior level Software Engineering class at Texas A&M.
                    </Text>
                    <Anchor href="https://github.com/dantebarbieri/BMES-Member-Point-Tracker" target="_blank" ><Button variant={'outline'} w={'150px'}>View on Github</Button></Anchor>
                </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h={'100%'}>
                    <h2>Snake</h2>
                    <Text size="sm" c="dimmed">
                        Unlike most portfiolios, this one isn't designed to showcase my top-notch frontend skills 
                        (although I do quite alright in that regard too). Instead it's to demonstrate a mature and
                        flushed out DevOps pipeline from code to delivery. While what you are seeing on screen
                        may seem like a simple web-app, there is a lot going on behind the seems designed to 
                        mimic a cloud-based enterprise application development environment. 
                    </Text>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h={'100%'}>
                    <h2>Portfolio</h2>
                    <Text size="sm" c="dimmed">
                        Unlike most portfiolios, this one isn't designed to showcase my top-notch frontend skills 
                        (although I do quite alright in that regard too). Instead it's to demonstrate a mature and
                        flushed out DevOps pipeline from code to delivery. While what you are seeing on screen
                        may seem like a simple web-app, there is a lot going on behind the seems designed to 
                        mimic a cloud-based enterprise application development environment. 
                    </Text>
                </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h={'100%'}>
                    <h2>React Weather App</h2>
                    <Text size="sm" c="dimmed">
                        Unlike most portfiolios, this one isn't designed to showcase my top-notch frontend skills 
                        (although I do quite alright in that regard too). Instead it's to demonstrate a mature and
                        flushed out DevOps pipeline from code to delivery. While what you are seeing on screen
                        may seem like a simple web-app, there is a lot going on behind the seems designed to 
                        mimic a cloud-based enterprise application development environment. 
                    </Text>
                </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h={'100%'}>
                    <h2>Card Generator</h2>
                    <Text size="sm" c="dimmed">
                        Unlike most portfiolios, this one isn't designed to showcase my top-notch frontend skills 
                        (although I do quite alright in that regard too). Instead it's to demonstrate a mature and
                        flushed out DevOps pipeline from code to delivery. While what you are seeing on screen
                        may seem like a simple web-app, there is a lot going on behind the seems designed to 
                        mimic a cloud-based enterprise application development environment. 
                    </Text>
                </Card>
            </Grid.Col>
        </Grid>
    )
}

export default Projects;