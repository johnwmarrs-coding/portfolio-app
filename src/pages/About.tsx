import { Title } from '@mantine/core';
import { Anchor, Group, Text, Flex } from '@mantine/core';
function About() {
    return (
        <div>
            <Group justify="center">
                <Anchor href="/" underline="hover">
                    Home
                </Anchor>
                <Anchor href="/About" underline="hover">
                    About
                </Anchor>
                <Anchor href="/Projects" underline="hover">
                    Projects
                </Anchor>
                <Anchor href="/Contact" underline="hover">
                    Contact
                </Anchor>
            </Group>
        </div>
    )
}

export default About;