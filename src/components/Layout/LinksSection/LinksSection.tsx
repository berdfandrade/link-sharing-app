import AddNewLinkButton from "./AddNewLinkButton";
import { Box, Divider, Text } from '@chakra-ui/react'
import Link from "./Link";
import SaveButton from "./SaveButton";

export default function LinksSection() {
    return (
        <Box width="60%" bg='white' p={10} borderRadius='md' height="100%">
            <Text as='b' fontSize={30}>Customize Your Links</Text>
            <Text color='gray.400' mb={20}>Add/edit/remove links below and then share all your profiles with the world!</Text>
            <AddNewLinkButton />
            <Link number={1} />
            <Divider />
            <Box mt={10} display="flex" justifyContent="flex-end">
                <SaveButton />
            </Box>
        </Box>
    )
}