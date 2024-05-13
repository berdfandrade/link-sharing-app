import { Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface IPreviewButton {
  onClick?: () => void; 
}

export default function PreviewButton({ onClick }: IPreviewButton) {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    setActive(!active);
    if (onClick) onClick();
  };

  return (
    <Button
      _hover={{ bg: '#672cfc', color: "#846ae6" }} // Aplica o hover para o botão inteiro
      bg={active ? '#672cfc' : ''}
      p={5}
      pr={7}
      pl={7}
      variant={'outline'}  
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Flex alignItems='center' gap={3}>
        <Text
          fontSize='15px'
          color={(active || hover) ? '#ffffff' : 'gray'} 
        >
          Preview
        </Text>
      </Flex>
    </Button>
  );
}
