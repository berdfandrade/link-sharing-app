import { Box, Center, Flex } from "@chakra-ui/react";
import { useStateLinkContext } from "../../context/StateContext/StateLinkProvider";
import PreviewSection from "./PreviewSection";
import AvatarSkeleton from "../Layout/PhoneSection/AvatarSkeleton";
import NameSkeleton from "../Layout/PhoneSection/NameSkeleton";
import LinkBoxSection from "../Layout/PhoneSection/LinkBoxSection";
import LinkBox from "../Layout/PhoneSection/LinkBox";

export default function PreviewPage() {
  const { globalObject } = useStateLinkContext();

  return (
    <Box w="100%" h="100%">
      <PreviewSection>
        <Center>
          <Flex gap={8} flexDir="column">
            <AvatarSkeleton />
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
      </PreviewSection>
    </Box>
  );
}
