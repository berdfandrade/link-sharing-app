import { Flex, Icon, Text, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useStateLinkContext } from "../../../../../context/StateContext/StateLinkProvider";

export default function AddNewLinkButton() {
  const { updateLinks } = useStateLinkContext();

  const handleClick = () => {
    updateLinks({ platform: "GitHub", url: "" });
  };

  return (
    <Button
      onClick={handleClick}
      variant={"outline"}
      colorScheme="purple"
      w="100%"
    >
      <Flex flexDir="row" alignItems={"center"} gap="2">
        <Icon as={FaPlus} />
        <Text>Add new Link</Text>
      </Flex>
    </Button>
  );
}
