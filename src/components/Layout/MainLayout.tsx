import { Flex } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';
import PhoneSection from './PhoneSection/PhoneSection';
import LinksSection from './LinksSection/LinksSection';

export default function MainLayout() {
    return (
        // Main section 
        <Flex p={10} bg={'#faf9f9'} gap={3} direction="column" height="100vh">
            <Navbar />
            <Flex gap={4} height="100%">
                <PhoneSection />
                <LinksSection />
            </Flex>
        </Flex>
    );
}
