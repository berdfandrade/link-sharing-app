import { Box, Image } from "@chakra-ui/react";
import HoverPic from "./HoverPic"; // Certifique-se de ajustar o caminho para onde está o HoverPic
import NullPhotoIcon from "./NullPhotoIcon";

interface IProfilePicUpload {
  url: string | null;
}

export default function ProfilePicUpload({ url }: IProfilePicUpload) {
  return (
    <Box
      position="relative"
      boxSize="160px"
      borderRadius="lg"
      overflow="hidden"
      role="group"
      _hover={{ cursor: "pointer" }}
    >
      {url ? (
        <Image
          borderRadius="lg"
          src={url}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      ) : (
        <NullPhotoIcon />
      )}

      <HoverPic />
    </Box>
  );
}
