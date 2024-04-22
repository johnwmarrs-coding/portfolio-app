import {  Card, Image, Grid, Timeline} from '@mantine/core';
import {  Text } from '@mantine/core';
import john_square from '../assets/john_square.png'
import Kudos from '../components/Kudos';
function Home() {
    return (
        <Grid ta={'left'}>
            <Grid.Col span={{ base: 12, md: 6, lg: 8}}>
                <h1>Howdy!</h1>
                <h2>
                    My name is John Marrs and you've just landed at my personal website.
                </h2>
                <Text size="md" c="dimmed">
                    I'm a Texas A&M educated software engineer
                    with experience in full-stack application development, automation, DevOps, Site Reliability Engineering,
                    databases, automated and manual testing, and more.  
                </Text>
                <br></br>
                <Text size="md" c="dimmed">
                    My hobbies include running, weightlifting, soccer, tabletop and card games, video games, tinkering with 
                    technology, and ultimately just embracing unique opportunties that life throws at me.
                
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4}}>
                <Kudos></Kudos>
                <Image src={john_square} radius="md" mah={400} fit={'contain'}></Image>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6, lg: 4}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
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
            <Grid.Col span={{ base: 12, md: 6, lg: 4}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <h2>How to Use</h2>
                    <Text size="sm" c="dimmed">
                        Unlike most portfiolios, this one isn't designed to showcase my top-notch frontend skills 
                        (although I do quite alright in that regard too). Instead it's to demonstrate a mature and
                        flushed out DevOps pipeline from code to delivery. While what you are seeing on screen
                        may seem like a simple web-app, there is a lot going on behind the seems designed to 
                        mimic a cloud-based enterprise application development environment. 
                    </Text>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4}}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <h2>Tech Stack</h2>
                    <Text size="sm" c="dimmed">
                        Unlike most portfiolios, this one isn't designed to showcase my top-notch frontend skills 
                        (although I do quite alright in that regard too). Instead it's to demonstrate a mature and
                        flushed out DevOps pipeline from code to delivery. While what you are seeing on screen
                        may seem like a simple web-app, there is a lot going on behind the seems designed to 
                        mimic a cloud-based enterprise application development environment. 
                    </Text>
                </Card>
            </Grid.Col>
            <Grid.Col span={12}>
                <Timeline active={4}bulletSize={24} lineWidth={2}>
                    <Timeline.Item>
                        <h2>Architecture + Setup</h2>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Text size="sm" c="dimmed">
                                Unlike most portfiolios, this one isn't designed to showcase my top-notch frontend skills 
                                (although I do quite alright in that regard too). Instead it's to demonstrate a mature and
                                flushed out DevOps pipeline from code to delivery. While what you are seeing on screen
                                may seem like a simple web-app, there is a lot going on behind the seems designed to 
                                mimic a cloud-based enterprise application development environment. 
                            </Text>
                        </Card>
                    </Timeline.Item>
                    <Timeline.Item>
                        <h2>Microservices and Applications</h2>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Text size="sm" c="dimmed">
                                Unlike most portfiolios, this one isn't designed to showcase my top-notch frontend skills 
                                (although I do quite alright in that regard too). Instead it's to demonstrate a mature and
                                flushed out DevOps pipeline from code to delivery. While what you are seeing on screen
                                may seem like a simple web-app, there is a lot going on behind the seems designed to 
                                mimic a cloud-based enterprise application development environment. 
                            </Text>
                        </Card>
                    </Timeline.Item>
                    <Timeline.Item>
                        <h2>Continuous Integration and Deployment</h2>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Text size="sm" c="dimmed">
                                Unlike most portfiolios, this one isn't designed to showcase my top-notch frontend skills 
                                (although I do quite alright in that regard too). Instead it's to demonstrate a mature and
                                flushed out DevOps pipeline from code to delivery. While what you are seeing on screen
                                may seem like a simple web-app, there is a lot going on behind the seems designed to 
                                mimic a cloud-based enterprise application development environment. 
                            </Text>
                        </Card>
                    </Timeline.Item>
                    <Timeline.Item>
                        <h2>Testing and Monitoring</h2>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Text size="sm" c="dimmed">
                                Unlike most portfiolios, this one isn't designed to showcase my top-notch frontend skills 
                                (although I do quite alright in that regard too). Instead it's to demonstrate a mature and
                                flushed out DevOps pipeline from code to delivery. While what you are seeing on screen
                                may seem like a simple web-app, there is a lot going on behind the seems designed to 
                                mimic a cloud-based enterprise application development environment. 
                            </Text>
                        </Card>
                    </Timeline.Item>
                    <Timeline.Item><h2>End Result: What you see on screen!</h2></Timeline.Item>
                </Timeline>
            </Grid.Col>
        </Grid>
    )
}

export default Home;