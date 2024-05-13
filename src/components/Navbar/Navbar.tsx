import { Flex } from "@chakra-ui/react";
import Logo from "./Logo/Logo";
import ButtonPages from "./ButtonPages/ButtonPages";
import {  FaLink,} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import PreviewButton from "./PreviewButton/PreviewButton";

export default function Navbar() {
  return (
    <Flex p={4} borderRadius='md' justify="space-between" bg={'white'} alignItems="center">
      {/* LOGO */}
      <Logo />

      {/* BOTÕES QUE FICAM NO MEIO */}
      <Flex gap={2}>
        <ButtonPages icon={FaLink}>Links</ButtonPages>
        <ButtonPages icon={CgProfile}>Profile Details</ButtonPages>
        {/* <Button>BOTÃO 2</Button> */}
      </Flex>

      {/* BOTÃO FINAL */}
      <PreviewButton/>
    </Flex>
  );
}
