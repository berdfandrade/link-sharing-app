import { Box, Icon, Flex } from "@chakra-ui/react";
import { FaLink } from "react-icons/fa";

export default function LogoMobile() {
  return (
    <>
      <Box>
        <Flex gap={1} flexDir={"row"} alignItems="center">
          <Box
            borderRadius="md"
            p={1}
            bg={"#613ef2"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon boxSize="18px" color="white" as={FaLink} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
