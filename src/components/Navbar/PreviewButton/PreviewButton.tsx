import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function PreviewButton() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <Button
            p={4}
            pr={6}
            pl={6}
            _hover={{ bg: "#3504f8", color: "white" }} 
            bg={active ? '#613ef2' : 'transparent'} 
            borderColor='#613ef2'
            onClick={handleClick}
        >
            <Text color={active ? 'white' : ''}>Preview</Text>
        </Button>
    );
}