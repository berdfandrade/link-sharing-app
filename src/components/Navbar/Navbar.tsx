import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Logo from "./Logo/Logo";
import ButtonPages from "./ButtonPages/ButtonPages";
import { FaLink } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import PreviewButton from "./PreviewButton/PreviewButton";

export default function Navbar({ setSelectedPage }) {
  const [activeButton, setActiveButton] = useState("links");

  const handlePageChange = (pageName) => {
    setSelectedPage(pageName);
    setActiveButton(pageName);
  };

  return (
    <Flex
      p={4}
      borderRadius="md"
      justify="space-between"
      bg={"white"}
      alignItems="center"
    >
      {/* LOGO */}
      <Logo />

      {/* BOTÕES QUE FICAM NO MEIO */}
      <Flex gap={2}>
        <ButtonPages
          icon={FaLink}
          onClick={() => handlePageChange("links")}
          isActive={activeButton === "links"}
        >
          Links
        </ButtonPages>
        <ButtonPages
          icon={CgProfile}
          onClick={() => handlePageChange("profile")}
          isActive={activeButton === "profile"}
        >
          Profile Details
        </ButtonPages>
      </Flex>
      <PreviewButton />
    </Flex>
  );
}
