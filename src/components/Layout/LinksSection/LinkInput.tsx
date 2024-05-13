import { Flex, Text, Input, Icon, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { FaLink } from 'react-icons/fa';

export default function LinkInput() {
    return (
        <Flex gap={2} flexDir={'column'}>
            <Text color={'gray.600'} fontSize={'sm'}>Link</Text>
            <InputGroup>
            <InputLeftAddon><Icon as={FaLink}/></InputLeftAddon>
                <Input bg={'white'} w={'100%'} />
            </InputGroup>
        </Flex>
    )
}