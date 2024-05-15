import AddNewLinkButton from "./LinksSection/AddLinkSection/AddNewLinkButton";
import { Box, Divider } from '@chakra-ui/react'
import AddLink from "./LinksSection/AddLinkSection/AddLink";
import SaveButton from "./LinksSection/SaveButton";
import { useStateLinkContext } from "../../../Context/StateContext/StateLinkProvider";
import HeadingPages from "../Heading/HeadingPages";
import SubtitleText from "../Subtitles/SubtitleText";
import MainSection from "../MainSection/MainSection";
import GlobalObjectRender from "../../GlobalObjectRender/GlobalObjectRender";


export default function CustomizeYourLinks() {

    const { globalObject } = useStateLinkContext();

    return (
        <MainSection>
            <HeadingPages>Customize Your Links</HeadingPages>
            <SubtitleText>Add/edit/remove links below and then share all your profiles with the world!</SubtitleText>
            <AddNewLinkButton />
            
            {/* <GlobalObjectRender/> */}

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
    )
}