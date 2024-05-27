import { Box, useMediaQuery} from "@chakra-ui/react";
import { ReactNode } from "react";

interface IMainSection {
  children: ReactNode;
}

export default function MainSection({ children }: IMainSection) {

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      width={isMobile ? '100%' : '60%'}
      bg="white"
      p={10}
      borderRadius="md"
      height="100%"
      overflowX={"auto"}
    >
      {children}
    </Box>
  );
}
