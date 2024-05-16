import { Box, Flex } from "@chakra-ui/react";
import NameEmailInput from "./NameEmailInput";

// Exportar esse formulário para o global
export default function NameEmailSection() {
  return (
    <Box alignItems={"center"} bg="gray.100" p={4} borderRadius={"md"}>
      <Flex gap={3} flexDir={"column"}>
        <NameEmailInput placeholder="Jonh">First Name*</NameEmailInput>
        <NameEmailInput placeholder="Doe">Last Name*</NameEmailInput>
        <NameEmailInput placeholder="johndoe@example.com">Email</NameEmailInput>
      </Flex>
    </Box>
  );
}
