import { Box, Flex } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';
import PhoneSection from './PhoneSection/PhoneSection';
import LinksSection from './LinksSection/LinksSection';

export default function MainLayout() {
    return (
        // Main section 
        <Flex p={10} bg={'#faf9f9'} gap={3} direction="column" height="100vh">
            {/* Navbar fica no topo */}
            <Navbar />

            {/* Flex para organizar os elementos ao lado um do outro */}
            <Flex gap={4} height="100%">
                {/* Box do lado esquerdo */}
                <Box width="40%" p={4} bg={'white'} borderRadius='md' height="100%" display="flex" justifyContent="center">

                    <PhoneSection />

                </Box>
                {/* Box do lado direito da página */}
                <Box width="60%" bg='white' p={10} borderRadius='md' height="100%">
                    <LinksSection/>
                </Box>
            </Flex>
        </Flex>
    );
}
