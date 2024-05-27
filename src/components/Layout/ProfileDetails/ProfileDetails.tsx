import HeadingPages from "../Heading/HeadingPages";
import MainSection from "../MainSection/MainSection";
import SubtitleText from "../Subtitles/SubtitleText";
import NameEmailSection from "./NameEmailSection/NameEmailSection";
import ProfilePicSection from "./ProfilePicUpload/ProfilePicSection";
import { Flex } from "@chakra-ui/react";

export default function ProfileDetails () {
    return (
        <MainSection>
            <HeadingPages>Profile page</HeadingPages>
            <SubtitleText marginBottom={10}>Add your details to create a personal touch to your profile</SubtitleText>
            <Flex flexDir='column' gap={10}>
            <ProfilePicSection/>
            <NameEmailSection/>
            </Flex>
        </MainSection>
    )
}