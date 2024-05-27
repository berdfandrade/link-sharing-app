import React, { useState } from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import LogoFullSize from "./Logo/LogoFullSize";
import LogoMobile from "./Logo/LogoMobile";
import ButtonPages from "./ButtonPages/ButtonPages";
import { FaLink } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import PreviewButton from "./PreviewButton/PreviewButton";

export default function Navbar({ setSelectedPage }) {
  
  const [activeButton, setActiveButton] = useState("links");
  
  // Hook para detectar se a tela é menor que 768px
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handlePageChange = (pageName) => {
    setSelectedPage(pageName);
    setActiveButton(pageName);
  };

  return (
    <Flex
      p={isMobile ? 4 : 5}
      borderRadius="md"
      justify="space-between"
      bg={"white"}
      alignItems="center"
    >
      {/* LOGO */}
      {isMobile ? <LogoMobile /> : <LogoFullSize />}

      {/* BOTÕES QUE FICAM NO MEIO */}
      <Flex gap={2}>
        <ButtonPages
          icon={FaLink}
          onClick={() => handlePageChange("links")}
          isActive={activeButton === "links"}
        >
          {isMobile ? '' : 'Links'}
        </ButtonPages>
        <ButtonPages
          icon={CgProfile}
          onClick={() => handlePageChange("profile")}
          isActive={activeButton === "profile"}
        >
          {isMobile ? '' : 'Profile Details'}
        </ButtonPages>
      </Flex>
      <PreviewButton />
    </Flex>
  );
}
