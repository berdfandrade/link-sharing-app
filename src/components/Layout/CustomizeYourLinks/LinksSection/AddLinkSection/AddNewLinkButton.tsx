import { Flex, Icon, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useStateLinkContext } from "../../../../../context/StateContext/StateLinkProvider";

export default function AddNewLinkButton() {
  const isMobile = useMediaQuery("(max-witdh : 768px)");
  const { updateLinks } = useStateLinkContext();

  const handleClick = () => {
    updateLinks({ platform: "GitHub", url: "" });
  };

  return (
    <Button
      onClick={handleClick}
      variant={"outline"}
      colorScheme="purple"
      h={isMobile ? "48px" : "20px"}
      w="100%"
    > 

      <Flex flexDir="row" alignItems={"center"} gap="1">
        <Icon boxSize={"10px"} mt={"1px"} as={FaPlus} />
        <Text>Add new Link</Text>
      </Flex>
    </Button>
  );
}
