import { Box, VStack } from '@chakra-ui/react'
import { ReactNode } from 'react';

interface ILinkBoxSection {
    children? : ReactNode
}

export default function LinkBoxSection({ children }: ILinkBoxSection) {
    return (
        <Box mt={12}>
            <VStack gap={'28px'} overflowY={'auto'} borderRadius={'lg'}  maxH={'340px'}>
                {children}
            </VStack>
        </Box>
    )
}