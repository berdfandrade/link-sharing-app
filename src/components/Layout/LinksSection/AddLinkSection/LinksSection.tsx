import AddNewLinkButton from "./AddNewLinkButton";
import { Box, Divider, Text } from '@chakra-ui/react'
import AddLink from "./AddLink";
import SaveButton from "../SaveButton";
import { useStateLinkContext } from "../../../StateContext/StateLinkProvider";


export default function LinksSection() {

    const { globalState } = useStateLinkContext();
    
    return (
        <Box width="60%" bg='white' p={10} borderRadius='md' height="100%">
            <Text as='b' fontSize={30}>Customize Your Links</Text>
            <Text color='gray.400' mb={20}>Add/edit/remove links below and then share all your profiles with the world!</Text>

            <AddNewLinkButton />
            <Text>{globalState.LINKS.length}</Text> 
            <AddLink number={1}/>
            <Text></Text>
            <Divider />
            <Box mt={10} display="flex" justifyContent="flex-end">
                <SaveButton />
            </Box>
        </Box>
    )
}