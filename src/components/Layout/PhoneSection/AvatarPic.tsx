import { Avatar } from "@chakra-ui/react";

interface IAvatarPic {
    url : string; 
}

export default function AvatarPic({url} : IAvatarPic) {
  return (
    <Avatar
      src={url}
      border='1xps solid black'
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
