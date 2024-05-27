import {
  Button,
  Flex,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  useMediaQuery,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import PreviewPage from "../../Preview/PreviewPage";
import { FaEye } from "react-icons/fa";

interface IPreviewButton {
  onClick?: () => void;
}

export default function PreviewButton({ onClick }: IPreviewButton) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    onOpen(); // Corrigido: chama onOpen como uma função
    if (onClick) onClick();
  };

  return (
    <>
      <Button
        _hover={{ bg: "#672cfc", color: "#ffffff" }} // Corrigido: ajusta a cor do texto durante o hover
        bg={active ? "#672cfc" : ""}
        p={4} // Ajustado: espaçamento vertical dentro do botão
        pr={isMobile ? 4 : 7}
        pl={isMobile ? 4 : 7}
        borderRadius={isMobile ? "9" : "8"}
        borderColor="#846ae6"
        variant={"outline"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <Flex alignItems="center" gap={3}>
          {isMobile ? (
            <Icon as={FaEye} boxSize={"18px"} color={"#672cfc"} />
          ) : (
            <Text
              fontSize="15px"
              color={active || hover ? "#ffffff" : "#846ae6"}
            >
              Preview
            </Text>
          )}
        </Flex>
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        size={isMobile ? "md" : "full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box bg={"#672cfc"} h={"300px"} borderBottomRadius={"40"}>
            <DrawerHeader>
              <Box mt={3} bg={"white"} p={4} borderRadius={"lg"}>
                <Flex justifyContent={"space-between"}>
                  <Button variant="outline" onClick={onClose}>
                    Back to Editor
                  </Button>
                  <Button color="white" bg="#672cfc" mr={3}>
                    Share Link
                  </Button>
                </Flex>
              </Box>
            </DrawerHeader>
          </Box>
          <DrawerBody w="100%" h={"100%"}>
            <PreviewPage />
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
