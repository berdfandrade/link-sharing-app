import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";


interface ISubtileText {
    children : ReactNode; 
}

export default function SubtitleText ({children} : ISubtileText) {
    return (
        <Text color='gray.400' mb={20}>{children}</Text>

    )
}