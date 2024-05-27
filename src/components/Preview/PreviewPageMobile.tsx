import { Box, Flex, Text, Button, Avatar } from "@chakra-ui/react";
import LinkBoxSection from "../Layout/PhoneSection/LinkBoxSection";
import { useStateLinkContext } from "../../context/StateContext/StateLinkProvider";
import LinkBox from "../Layout/PhoneSection/LinkBox";
import AvatarSkeleton from "../Layout/PhoneSection/AvatarSkeleton";
import NameSkeleton from "../Layout/PhoneSection/NameSkeleton";

export default function PreviewPageMobile() {
  const { globalObject } = useStateLinkContext();

  return (
    <Box>
      <LinkBoxSection>
        <Flex justifyContent={"space-between"} gap={10}>
          <Button variant="outline">Back to Editor</Button>
          <Button color="white" bg="#672cfc">
            Share Link
          </Button>
        </Flex>
        <AvatarSkeleton/>
        <NameSkeleton/>
        {globalObject.LINKS.map((link, index) => (
          <div key={index}>
            <LinkBox platform={link.platform || ""} url={link.url || ""} />
          </div>
        ))}
      </LinkBoxSection>
    </Box>
  );
}
