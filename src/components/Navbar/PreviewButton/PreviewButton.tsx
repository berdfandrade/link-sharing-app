import {
  Button,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import PreviewPage from "../../Preview/Preview";

interface IPreviewButton {
  onClick?: () => void;
}

export default function PreviewButton({ onClick }: IPreviewButton) {
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
        pr={7}
        pl={7}
        borderColor="#846ae6"
        variant={"outline"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <Flex alignItems="center" gap={3}>
          <Text fontSize="15px" color={active || hover ? "#ffffff" : "#846ae6"}>
            Preview
          </Text>
        </Flex>
      </Button>

      <Modal
        isCentered
        onClose={onClose}
        size={"full"}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        key="modal" // Adicionado: chave única para o componente Modal
      >
        <ModalOverlay />
        <ModalContent>
          <Box bg={"#672cfc"} h={"300px"} borderBottomRadius={"40"}>
            <ModalHeader>
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
            </ModalHeader>
          </Box>
          <ModalBody w="100%" h={"100%"}>
            <PreviewPage />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
