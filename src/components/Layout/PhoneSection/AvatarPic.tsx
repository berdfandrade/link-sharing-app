import { Avatar } from "@chakra-ui/react";


export default function AvatarPic({url}) {

  return (
    <Avatar
      src={url}
      bg="gray.200"
      borderRadius="100%"
      ml="auto"
      mr="auto"
      mt={6}
      w="110px"
      h="110px"
    />
  );
}