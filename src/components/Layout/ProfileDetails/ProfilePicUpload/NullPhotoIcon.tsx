import { Box, Icon, Center } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export default function NullPhotoIcon() {
  return (
    <Box
      w={"100%"}
      borderRadius={"lg"}
      borderColor={"#816dc7"}
      border={"2px dashed #816dc7"}
      h={"100%"}
    >
      <Center mt={"35%"}>
        <Icon
          boxSize={"50px"}
          color={"#816dc7"}
          ml={"auto"}
        //   color={"gray"}
          mr={"auto"}
          as={FaPlus}
        />
      </Center>
    </Box>
  );
}
