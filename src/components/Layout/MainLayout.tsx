import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import PhoneSection from "./PhoneSection/PhoneSection";
import CustomizeYourLinks from "./CustomizeYourLinks/CustomizeYourLinks";
import ProfileDetails from "./ProfileDetails/ProfileDetails";

export default function MainLayout() {
  const [selectedPage, setSelectedPage] = useState("links");

  return (
    <Box bg={"#faf9f9"} w="100%">
      <Flex
        p={10}
        bg={"#faf9f9"}
        gap={3}
        maxW="1500px"
        direction="column"
        height="100vh"
        mr="auto"
        ml="auto"
      >
        <Navbar setSelectedPage={setSelectedPage} />
        <Flex gap={4} height="100%">
          <PhoneSection />
          {selectedPage === "links" ? <CustomizeYourLinks /> : <ProfileDetails />}
        </Flex>
      </Flex>
    </Box>
  );
}
