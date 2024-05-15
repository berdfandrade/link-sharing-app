import { Flex, Icon, Text, Button } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import { useStateLinkContext } from '../../../../../Context/StateContext/StateLinkProvider'

export default function AddNewLinkButton() {

    const { updateLinks  } = useStateLinkContext()


    const handleClick = () => {
        updateLinks({ platform: '', url : ''});
    }

    return (
        <Button onClick={handleClick} variant={'outline'} colorScheme='purple' w='100%'>
            <Flex flexDir='row' alignItems={'center'} gap='2'>

                <Icon as={FaPlus} />
                {/* REMOVER GLOBALSTATE.LINKS.LENGTH */}
                <Text>Add new Link</Text></Flex>

        </Button>
    )
}