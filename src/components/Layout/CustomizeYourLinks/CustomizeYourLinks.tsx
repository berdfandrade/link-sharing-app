import AddNewLinkButton from "./LinksSection/AddLinkSection/AddNewLinkButton";
import { Box, Divider, useMediaQuery } from "@chakra-ui/react";
import { AddLink } from "./LinksSection/AddLinkSection/AddLink";
import SaveButton from "./LinksSection/SaveButton";
import { useStateLinkContext } from "../../../context/StateContext/StateLinkProvider";
import HeadingPages from "../Heading/HeadingPages";
import SubtitleText from "../Subtitles/SubtitleText";
import MainSection from "../MainSection/MainSection";

export default function CustomizeYourLinks() {

  const [isMobile] = useMediaQuery("(max-width : 768px)");
  const { globalObject } = useStateLinkContext();

  return (
    <MainSection>
 
      <HeadingPages>Customize Your Links</HeadingPages>
      <SubtitleText marginBottom={isMobile ? 10 : 4}>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </SubtitleText>
      <AddNewLinkButton />
  
      {globalObject.LINKS.map((link, index) => (
        <div key={index}>
          <AddLink number={index} />
        </div>
      ))}

      <Divider />
      <Box mt={10} display="flex" justifyContent="flex-end">
        <SaveButton />
      </Box>
    </MainSection>
  );
}
