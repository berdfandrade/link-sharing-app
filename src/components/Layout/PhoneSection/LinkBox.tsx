import {Box, Icon, Text, Flex} from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface ILinkBox {
    icon : IconType;
    text : string;
}
export default function LinkBox({icon, text} : ILinkBox) {
    return (
        <Box bg='black' p={3}w='250px' h='50px'>
        <Flex flexDir='row' color='white' alignItems={'center'}>
        <Icon boxSize='30px'as={icon}/>
        <Text>{text}</Text>
        </Flex>
    </Box>
    
    )

}