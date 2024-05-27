import { Box } from "@chakra-ui/react";

export default function AvatarSkeleton() {
  return (
    <Box
      border='1xps solid black'
      bg="gray.200"
      borderRadius="100%"
      ml="auto"
      mr="auto"
      mt={6}
      w="110px"
      h="110px"
    />
  );
}
