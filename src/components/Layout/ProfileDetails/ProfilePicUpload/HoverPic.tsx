import { Box, Icon, Flex, Text } from "@chakra-ui/react";
import { AiOutlinePicture } from "react-icons/ai";

export default function HoverPic() {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bg="#efecff"
      display="flex"
      justifyContent="center"
      alignItems="center"
      opacity="0"
      transition="opacity 0.3s ease"
      _groupHover={{ opacity: 1 }}
    >
      <Flex flexDir="column">
        <Icon
          mr={"auto"}
          ml={"auto"}
          as={AiOutlinePicture}
          color="#816dc7"
          boxSize="2em"
        />
        <Text as="b" color="#816dc7">
          Change image
        </Text>
      </Flex>
    </Box>
  );
}
