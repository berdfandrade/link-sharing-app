import AddNewLinkButton from "./AddNewLinkButton";
import {Box, Text } from '@chakra-ui/react'

export default function LinksSection () {
    return (
        <Box>
            <Text as='b' fontSize={30}>Customize Your Links</Text>
            <Text color='gray.400' mb={20}>Add/edit/remove links below and then share all your profiles with the world!</Text>
            <AddNewLinkButton/>
        </Box>
    )
}