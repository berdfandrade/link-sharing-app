import AddNewLinkButton from "./LinksSection/AddLinkSection/AddNewLinkButton";
import { Box, Divider } from '@chakra-ui/react'
import AddLink from "./LinksSection/AddLinkSection/AddLink";
import SaveButton from "./LinksSection/SaveButton";
// import { useStateLinkContext } from "../../../Context/StateContext/StateLinkProvider";
import HeadingPages from "../Heading/HeadingPages";
import SubtitleText from "../Subtitles/SubtitleText";
import MainSection from "../MainSection/MainSection";


export default function CustomizeYourLinks() {

    // const { globalState } = useStateLinkContext();

    return (
        <MainSection>
            <HeadingPages>Customize Your Links</HeadingPages>
            <SubtitleText>Add/edit/remove links below and then share all your profiles with the world!</SubtitleText>
            <AddNewLinkButton />
            
            
            {/* CAIXA COM OS BAGULHO DE ESCOLHER PLATAFORMA E LINK */}
            <AddLink number={1} />

            <Divider />
            <Box mt={10} display="flex" justifyContent="flex-end">
                <SaveButton />
            </Box>
        </MainSection>
    )
}