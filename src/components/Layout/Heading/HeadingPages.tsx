import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IHeadingPages {
    children : ReactNode
}

export default function HeadingPages ({children} : IHeadingPages) {
    return (
        <Text as='b' fontSize={30} mb={2}>{children}</Text>
    )
}