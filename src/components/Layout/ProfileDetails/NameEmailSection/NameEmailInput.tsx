import { Input, Text, Flex, Box,  } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface INameEmailInputProps {
    children: ReactNode;
    placeholder : string;
}

export default function NameEmailInput({ children, placeholder }: INameEmailInputProps) {
    return (
        <Box>
            <Flex justifyContent={'space-between'} flexDir={'row'}>
                <Text fontSize={'12px'}>{children}</Text>
                <Input placeholder={placeholder} w={'70%'} bg={'white'} /> {/* Passando as inputProps para Input */}
            </Flex>
        </Box>
    );
}