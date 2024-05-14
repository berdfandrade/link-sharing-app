import { Box, Icon, Text, Flex } from '@chakra-ui/react';
import { FaGithub, FaYoutube, FaLinkedin, FaTwitch, FaTwitter, FaInstagram, FaQuestion } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa6";

interface ILinkBox {
    platform: string;
}

export default function LinkBox({ platform }: ILinkBox) {
    const BG_COLOR =
        platform === 'github' ? 'black' :
        platform === 'youtube' ? 'red' :
        platform === 'linkedin' ? '#0072B1' :
        platform === 'twitch' ? '#6441a5' :
        platform === 'twitter' ? 'twitter' :
        platform === 'instagram' ? 'orange' :
        'gray.200';

    const ICON =
        platform === 'github' ? FaGithub :
        platform === 'youtube' ? FaYoutube :
        platform === 'linkedin' ? FaLinkedin :
        platform === 'twitch' ? FaTwitch :
        platform === 'twitter' ? FaTwitter :
        platform === 'instagram' ? FaInstagram :
        FaQuestion;

    const TEXT =
        platform === 'github' ? 'GitHub' :
        platform === 'youtube' ? 'YouTube' :
        platform === 'linkedin' ? 'LinkedIn' :
        platform === 'twitch' ? 'Twitch' :
        platform === 'twitter' ? 'Twitter' :
        platform === 'instagram' ? 'Instagram' :
        '';

    return (
        <Box bg={BG_COLOR} p={3} w='270px' h='48px' borderRadius='md' _hover={{'cursor' : 'pointer'}}>
            <Flex flexDir={'row'} alignItems={'center'}>
            <Flex flexDir='row' color='white' gap={4} alignItems='center'>
                <Icon ml={2} boxSize='18px' as={ICON} />
                <Text mb='1' fontWeight='bold' >{TEXT}</Text>
            </Flex>
            <Icon as={FaArrowRight} mr={2}color='white' ml={'auto'}/>
            </Flex>
        </Box>
    );
}