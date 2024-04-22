import { Anchor, Group,Divider} from '@mantine/core';

function Header() {
    return (
        <div style={{marginBottom: '24px'}}>
            <Group justify='center'>
            <Anchor href="/" underline="hover">
                <h3>Home</h3>
            </Anchor>
            <Anchor href="/About" underline="hover">
                <h3>About</h3>
            </Anchor>
            <Anchor href="/Projects" underline="hover">
                <h3>Projects</h3>
            </Anchor>
            <Anchor href="/Contact" underline="hover">
                <h3>Contact</h3>
            </Anchor>
            </Group>
            <Divider ></Divider>
        </div>
    )
}

export default Header