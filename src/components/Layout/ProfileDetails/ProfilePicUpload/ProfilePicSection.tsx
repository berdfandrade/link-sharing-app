import { Box, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import ProfilePicUpload from "./ProfilePicUpload";

export default function ProfilePicSection() {

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box bg="gray.100" h={isMobile ? "40%" : "200px"} p={4}borderRadius={"md"}>
      <Flex
        gap={isMobile ? 5 : 0}
        flexDir={isMobile ? "column" : "row"}
        justifyContent={"space-between"}
        alignItems={isMobile ? "left" : 'center'}
      >
        <Text color={"gray.500"} fontSize={18} as="b">
          Profile Picture
        </Text>
          <ProfilePicUpload />
        <Flex color={"gray.500"} mr={5} flexDir={"column"}>
          <Text fontSize={"xs"}>Image must be below 1024X1024px.</Text>
          <Text fontSize={"xs"}>Use PNG, JPG, or BMP format.</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
