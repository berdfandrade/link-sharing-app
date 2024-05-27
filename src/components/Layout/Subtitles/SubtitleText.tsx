import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISubtileText {
  children: ReactNode;
  marginBottom : number | string;
}

export default function SubtitleText({ children, marginBottom }: ISubtileText) {
  return (
    <Text color="gray.400" mb={marginBottom}>
      {children}
    </Text>
  );
}
