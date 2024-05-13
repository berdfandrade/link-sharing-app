import { Box, Icon, Text, Flex,} from '@chakra-ui/react';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import SelectPlatform from './SelectPlatform';
import LinkInput from './LinkInput';

interface ILink {
    number: number;
}

export default function Link({ number }: ILink) {
    return (
        <Box mt={8} p={4} w={'100%'} bg='gray.50' borderRadius='md'>
            <Flex flexDir={'column'} gap={2}>
                <Flex flexDir={'row'} alignItems={'center'} justifyContent={'space-between'} gap='2'>
                    <Flex alignItems={'center'} gap='2'>
                        <Icon mt={1} as={HiOutlineMenuAlt4} />
                        <Text as='b'>Link #{number}</Text>
                    </Flex>
                    <Text _hover={{ "cursor": "pointer" }}>Remove</Text>
                </Flex>
                <Text fontSize='sm' color={'gray.600'}>Platform</Text>
                    <SelectPlatform/>
                    <LinkInput/>
            </Flex>
        </Box>
    );
}