import { Center, Box, Flex} from "@chakra-ui/react";
import Phone from "./Phone/Phone";
import AvatarSkeleton from "./AvatarSkeleton";
import NameSkeleton from "./NameSkeleton";
import LinkBox from "./LinkBox";
import LinkBoxSection from "./LinkBoxSection";
import { useStateLinkContext } from "../../../Context/StateContext/StateLinkProvider";



export default function PhoneSection() {

    const { globalObject } = useStateLinkContext();

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
                {globalObject.LINKS.map((link, index) => (
                <div key={index}>
                    <LinkBox platform={link.platform || ''} url={link.url || ''} />
                </div>
            ))}

                </LinkBoxSection>
            </Phone>
        </Box>
    )
}