import { useState } from "react";
import { Flex, Box, useMediaQuery} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import PhoneSection from "./PhoneSection/PhoneSection";
import CustomizeYourLinks from "./CustomizeYourLinks/CustomizeYourLinks";
import ProfileDetails from "./ProfileDetails/ProfileDetails";

export default function MainLayout() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [selectedPage, setSelectedPage] = useState("links");

  return (
    <Box bg={"#faf9f9"} w="100%">
      <Flex
        p={isMobile ? 3 : 10}  
        bg={"#faf9f9"}
        gap={3}
        maxW="1500px"
        direction="column"
        height="100vh"
        mr="auto"
        ml="auto"
      >
        <Navbar setSelectedPage={setSelectedPage} />
        <Flex gap={isMobile ? 0 : 4} height="100%">

          {isMobile ? null : <PhoneSection/>}
          {/* <PhoneSection /> */}
          {selectedPage === "links" ? <CustomizeYourLinks /> : <ProfileDetails />}
        </Flex>
      </Flex>
    </Box>
  );
}
