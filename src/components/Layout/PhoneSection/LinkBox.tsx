import { Box, Icon, Text, Flex } from "@chakra-ui/react";
import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

interface ILinkBox {
  platform: string;
  url: string;
}

export default function LinkBox({ platform, url }: ILinkBox) {
  // verifica se está vazio
  const isEmpty = platform == "" && url == "";

  // Cores condicionais
  const BG_COLOR =
    platform === "GitHub"
      ? "black"
      : platform === "YouTube"
      ? "red"
      : platform === "Linkedin"
      ? "#0072B1"
      : platform === "Twitch"
      ? "#6441a5"
      : platform === "Twitter"
      ? "#1da1f2"
      : platform === "Instagram"
      ? "orange"
      : "gray.200";

  // Gradiente radial para Instagram
  const BG_GRADIENT =
    platform === "Instagram"
      ? "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
      : "";

  // Icones condicionais
  const ICON =
    platform === "GitHub"
      ? FaGithub
      : platform === "YouTube"
      ? FaYoutube
      : platform === "Linkedin"
      ? FaLinkedin
      : platform === "Twitch"
      ? FaTwitch
      : platform === "Twitter"
      ? FaTwitter
      : platform === "Instagram"
      ? FaInstagram
      : undefined;

  // String de text condicional
  const TEXT =
    platform === "GitHub"
      ? "GitHub"
      : platform === "YouTube"
      ? "YouTube"
      : platform === "Linkedin"
      ? "LinkedIn"
      : platform === "Twitch"
      ? "Twitch"
      : platform === "Twitter"
      ? "Twitter"
      : platform === "Instagram"
      ? "Instagram"
      : "";

  // O componente em si
  return (
    <Box
      bg={platform === "Instagram" ? BG_GRADIENT : BG_COLOR}
      p={3}
      w="270px"
      h="48px"
      borderRadius="md"
      _hover={{ cursor: "pointer" }}
    >
      <Flex flexDir={"row"} alignItems={"center"}>
        <Flex flexDir="row" color="white" gap={4} alignItems="center">
          {isEmpty ? null : <Icon ml={2} boxSize="18px" as={ICON} />}
          <Text mb="1" fontWeight="bold">
            {TEXT}
          </Text>
        </Flex>
        {isEmpty ? null : (
          <Icon as={FaArrowRight} mr={2} color="white" ml={"auto"} />
        )}
      </Flex>
    </Box>
  );
}
