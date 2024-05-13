import { Center, Box } from "@chakra-ui/react";
import Phone from "../Phone/Phone";


export default function PhoneSection() {
    return (
        <Box width="40%" p={4} bg={'white'}
            borderRadius='md' height="100%"
            display="flex"
            justifyContent="center">
            <Phone>
                <Center>

                </Center>
            </Phone>
        </Box>
    )
}