import { Flex, Box} from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';
import PhoneSection from './PhoneSection/PhoneSection';
// import CostumizeYourLinks from './CustomizeYourLinks/CostomizeYourLinks';
import ProfileDetails from './ProfileDetails/ProfileDetails';

export default function MainLayout() {
    return (
        //
        <Box bg={'#faf9f9'} w='100%'>
        <Flex 
        p={10} 
        bg={'#faf9f9'} gap={3} 
        maxW='1500px'
        direction="column" 
        height="100vh"
        mr='auto'
        ml='auto'
        >
            <Navbar />
            <Flex gap={4} height="100%">
                <PhoneSection />
                {/* <CostumizeYourLinks/> */}
                <ProfileDetails/>
            </Flex>
        </Flex>
        </Box>
    );
}
