import { Flex, Icon, Text, Button } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import { useStateLinkContext } from '../../../StateContext/StateLinkProvider'

export default function AddNewLinkButton() {

    const { updateLinks, globalState } = useStateLinkContext()


    const handleClick = () => {
        updateLinks({ platform: '', url : ''});
    }

    return (
        <Button onClick={handleClick} variant={'outline'} colorScheme='purple' w='100%'>
            <Flex flexDir='row' alignItems={'center'} gap='2'>

                <Icon as={FaPlus} />
                <Text>Add new Link {globalState.LINKS.length}</Text></Flex>

        </Button>
    )
}