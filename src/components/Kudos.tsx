import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from 'react';

function Kudos() {
    const [clicked, setClicked] = useState(false)
    return (
      
        <ActionIcon variant="outline" radius='xl' mb={5} mt={5} color={'orange'} p={4} size='xl' onClick={() => setClicked(true)}>
            <div style={{position: 'relative'}}>
                <>{clicked && <ConfettiExplosion duration={2500} particleCount={80} force={0.6} width={1000}/>}</>
                </div>
            <IconHeart>
            </IconHeart>
        </ActionIcon>
    )
}

export default Kudos;