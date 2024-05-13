import { Flex, Icon, Text, Button } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
export default function AddNewLinkButton() {
    return (
        <Button variant={'outline'} colorScheme='purple' w='100%'>
            <Flex flexDir='row' alignItems={'center'} gap='2'>

                <Icon as={FaPlus} />
                <Text>Add new Link</Text></Flex>
        </Button>
    )
}