import { Center, Box, Flex} from "@chakra-ui/react";
import Phone from "../Phone/Phone";
import AvatarSkeleton from "./AvatarSkeleton";
import NameSkeleton from "./NameSkeleton";
import LinkBox from "./LinkBox";
import { FaGithub } from "react-icons/fa";


export default function PhoneSection() {
    return (
        <Box width="40%" p={4} bg={'white'}
            borderRadius='md' height="100%"
            display="flex"
            justifyContent="center">
            <Phone>
                <Center>
                    <Flex gap={8} flexDir='column'>
                    <AvatarSkeleton/>
                    <NameSkeleton/>
                    </Flex>
                </Center>

                <Box border='1px solid black' h={'100%'}mr='auto' ml='auto' mt='10'>
                <LinkBox icon={FaGithub} text={'Github'}/>
                </Box>
            </Phone>
        </Box>
    )
}