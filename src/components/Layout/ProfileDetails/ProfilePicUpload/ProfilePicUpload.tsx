import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useStateLinkContext } from "../../../../context/StateContext/StateLinkProvider";
import HoverPic from "./HoverPic"; // Certifique-se de ajustar o caminho para onde está o HoverPic
import NullPhotoIcon from "./NullPhotoIcon";

interface IProfilePicUpload {
  url: string | null;
}

export default function ProfilePicUpload({ url }: IProfilePicUpload) {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { setProfileImage } = useStateLinkContext();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);

      // Cria uma URL de visualização para a imagem
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);

      // Atualiza o estado global com a imagem selecionada
      setProfileImage(imageUrl);
    }
  };

  return (
    <Box
      position="relative"
      boxSize="160px"
      borderRadius="lg"
      overflow="hidden"
      role="group"
      _hover={{ cursor: "pointer" }}
      onClick={() => document.getElementById('imageInput')?.click()}
    >
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      {previewUrl ? (
        <Image
          borderRadius="lg"
          src={previewUrl}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      ) : url ? (
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
