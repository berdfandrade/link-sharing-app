import { Center, Box, Flex } from "@chakra-ui/react";
import Phone from "./Phone/Phone";
import AvatarSkeleton from "./AvatarSkeleton";
import AvatarPic from "./AvatarPic";
import NameSkeleton from "./NameSkeleton";
import LinkBox from "./LinkBox";
import LinkBoxSection from "./LinkBoxSection";
import { useStateLinkContext } from "../../../context/StateContext/StateLinkProvider";

export default function PhoneSection() {
  const { globalObject } = useStateLinkContext();

  return (
    <Box
      width="40%"
      p={4}
      bg={"white"}
      borderRadius="md"
      height="100%"
      display="flex"
      justifyContent="center"
    >
      <Phone>
        <Center>
          <Flex gap={8} flexDir="column">
            {/* PASSAR O avatarURL para o globalObject e depois para isso aqui */}
            
            {globalObject.USER.profileImage ? (
              <AvatarPic url={globalObject.USER.profileImage} />
            ) : (
              <AvatarSkeleton />
            )}
            <NameSkeleton />
          </Flex>
        </Center>
        <LinkBoxSection>
          {globalObject.LINKS.map((link, index) => (
            <div key={index}>
              <LinkBox platform={link.platform || ""} url={link.url || ""} />
            </div>
          ))}
        </LinkBoxSection>
      </Phone>
    </Box>
  );
}
