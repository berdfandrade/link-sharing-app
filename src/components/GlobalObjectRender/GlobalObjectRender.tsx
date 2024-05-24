import { Box, Code, Text } from "@chakra-ui/react";
import { useStateLinkContext } from "../../context/StateContext/StateLinkProvider";

export default function GlobalObjectRender() {
  const { globalObject } = useStateLinkContext();

  // Aqui você precisa decidir como deseja exibir o conteúdo de globalObject
  // porque globalObject é um objeto. Você pode convertê-lo em uma string JSON
  // ou iterar sobre suas propriedades, dependendo de como deseja apresentar os dados.

  // Por exemplo, para exibir como uma string JSON:
  const globalObjectString = JSON.stringify(globalObject, null, 2);

  return (
    <>
      <Text as="b" color="gray.500" mt={10}>
        Global object render
      </Text>
      <Box
        w="100%"
        borderRadius="md"
        mt={3}
        p={4}
        h="150px"
        bg={"gray.200"}
        overflowX={"auto"}
      >
        <Code mt={3} p={3} borderRadius={"md"}>
          {globalObjectString}
        </Code>
      </Box>
    </>
  );
}
