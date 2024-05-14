import { Center, Box, Flex} from "@chakra-ui/react";
import Phone from "../Phone/Phone";
import AvatarSkeleton from "./AvatarSkeleton";
import NameSkeleton from "./NameSkeleton";
import LinkBox from "./LinkBox";
import LinkBoxSection from "./LinkBoxSection";
import LinkBoxSkeleton from "./LinkBoxSkeleton";



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
                <LinkBoxSection>
                    <LinkBox platform={'github'}/>
                    <LinkBox platform={'youtube'}/>
                    <LinkBox platform={'linkedin'}/>
                    <LinkBoxSkeleton/>
                    <LinkBoxSkeleton/>
                </LinkBoxSection>
            </Phone>
        </Box>
    )
}