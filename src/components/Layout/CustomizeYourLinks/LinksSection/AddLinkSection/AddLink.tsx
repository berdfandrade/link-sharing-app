import {
  Box,
  Icon,
  Text,
  Flex,
  Select,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import { FaLink } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState, useEffect } from "react";
import OPTIONS from "./OPTIONS";
import { IoMdCloseCircleOutline as CloseIcon } from "react-icons/io";
import { useStateLinkContext } from "../../../../../context/StateContext/StateLinkProvider";

interface ILink {
  number: number;
}

export function AddLink({ number }: ILink) {
  
  const { globalObject, updateLinkAtIndex, removeLink } = useStateLinkContext();
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (globalObject.LINKS[number]) {
      setSelectedOption(
        OPTIONS.find((option) => option.label === globalObject.LINKS[number].platform) || OPTIONS[0]
      );
      setUrl(globalObject.LINKS[number].url);
    }
  }, [number, globalObject.LINKS]);

  const handlePlatformChange = (event) => {
    const selectedValue = event.target.value;
    const selected = OPTIONS.find((option) => option.label === selectedValue);
    setSelectedOption(selected);
    updateLinkAtIndex(number, { platform: selected.label, url });
  };

  const handleUrlChange = (event) => {
    const newUrl = event.target.value;
    setUrl(newUrl);
    updateLinkAtIndex(number, { platform: selectedOption.label, url: newUrl });
  };

  const handleRemove = () => {
    removeLink(number);
  };

  return (
    <Box mt={8} p={4} w={"100%"} bg="gray.50" borderRadius="md">
      <Flex flexDir={"column"} gap={2}>
        <Flex
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap="2"
        >
          <Flex alignItems={"center"} gap="2">
            <Icon mt={1} as={HiOutlineMenuAlt4} />
            <Text as="b">Link #{number + 1}</Text>
          </Flex>
          <Icon
            _hover={{ cursor: "pointer" }}
            boxSize="20px"
            as={CloseIcon}
            onClick={handleRemove}
          />
        </Flex>
        <Text fontSize="sm" color={"gray.600"}>
          Platform
        </Text>

        <Flex alignItems="center">
          <Icon as={selectedOption.icon} boxSize={5} mr={3} />
          <Select
            bg="white"
            value={selectedOption.label}
            onChange={handlePlatformChange}
          >
            {OPTIONS.map((option, index) => (
              <option key={index} value={option.label}>
                {option.label}
              </option>
            ))}
          </Select>
        </Flex>

        <Flex gap={2} flexDir={"column"}>
          <Text color={"gray.600"} fontSize={"sm"}>
            Link
          </Text>
          <InputGroup>
            <InputLeftAddon>
              <Icon as={FaLink} />
            </InputLeftAddon>
            <Input
              placeholder={
                selectedOption.label === "YouTube"
                  ? "https://www.youtube.com/"
                  : selectedOption.label === "GitHub"
                  ? "https://www.github.com/"
                  : selectedOption.label === "Twitch"
                  ? "https://www.twitch.com/"
                  : selectedOption.label === "Twitter"
                  ? "https://www.twitter.com/"
                  : selectedOption.label === "Linkedin"
                  ? "https://www.linkedin.com/"
                  : selectedOption.label === "Instagram"
                  ? "https://www.instagram.com"
                  : ""
              }
              bg={"white"}
              w={"100%"}
              value={url}
              onChange={handleUrlChange}
            />
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
}
