import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IPreviewSection {
  children: ReactNode;
}

export default function PreviewSection({ children }: IPreviewSection) {
  return (
    <Box
      ml={"auto"}
      w="320px"
      h={"600px"}
      p={6}
      bg={"white"}
      boxShadow="xl"
      borderRadius="40"
      mr={"auto"}
    >
      {children}
    </Box>
  );
}
