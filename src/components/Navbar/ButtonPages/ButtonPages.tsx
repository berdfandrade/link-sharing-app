import { Button, Icon, Flex, Text } from "@chakra-ui/react";
import { ComponentType, ReactNode, useState, useEffect } from "react";

interface IButtonPages {
  icon: ComponentType;
  children: ReactNode;
  onClick?: () => void; // Adicionado onClick como uma propriedade opcional
  isActive?: boolean; // Adicionado isActive como uma propriedade opcional
}

export default function ButtonPages({
  icon,
  children,
  onClick,
  isActive,
}: IButtonPages) {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (isActive !== undefined) {
      setActive(isActive);
    }
  }, [isActive]);

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
      _hover={{ bg: "#e0d4ff", color: "#846ae6" }} // Aplica o hover para o botão inteiro
      bg={active ? "#e0d4ff" : ""}
      p={5}
      pr={7}
      pl={7}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Flex alignItems="center" gap={3}>
        <Icon color={active || hover ? "#846ae6" : "gray"} as={icon} />
        <Text fontSize="15px" color={active || hover ? "#846ae6" : "gray"}>
          {children}
        </Text>
      </Flex>
    </Button>
  );
}
