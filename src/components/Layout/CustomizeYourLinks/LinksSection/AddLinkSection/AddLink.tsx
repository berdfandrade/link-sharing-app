import { Box, Icon, Text, Flex, Select, InputGroup, InputLeftAddon, Input } from '@chakra-ui/react';
import { FaLink } from 'react-icons/fa';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from 'react';
import OPTIONS from './OPTIONS';
import { IoMdCloseCircleOutline as CloseIcon } from "react-icons/io";
import { useStateLinkContext } from '../../../../../context/StateContext/StateLinkProvider';

interface ILink {
    number: number;
}


export function AddLink({ number }: ILink) {

    const { globalObject } = useStateLinkContext();

    const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        const selected = OPTIONS.find(option => option.label === selectedValue);
        setSelectedOption(selected);
    };

    return (

        // AddLinkBox
        <Box mt={8} p={4} w={'100%'} bg='gray.50' borderRadius='md'>
            <Flex flexDir={'column'} gap={2}>
                <Flex flexDir={'row'} alignItems={'center'} justifyContent={'space-between'} gap='2'>
                    <Flex alignItems={'center'} gap='2'>
                        <Icon mt={1} as={HiOutlineMenuAlt4} />
                        <Text as='b'>Link #{number + 1}</Text>
                    </Flex>
                    <Icon _hover={{ "cursor": "pointer" }}
                        boxSize='20px' as={CloseIcon} />
                </Flex>
                <Text fontSize='sm' color={'gray.600'}>Platform</Text>


                {/* Platform select */}
                <Flex alignItems="center">
                    <Icon as={selectedOption.icon} boxSize={5} mr={3} />
                    <Select bg='white' value={selectedOption.label} onChange={handleChange}>
                        {OPTIONS.map((option, index) => (
                            <option key={index} value={option.label}>
                                {option.label}
                            </option>
                        ))}
                    </Select>
                </Flex>


                {/* url input */}
                <Flex gap={2} flexDir={'column'}>
                    <Text color={'gray.600'} fontSize={'sm'}>Link</Text>
                    <InputGroup>
                        <InputLeftAddon>
                            <Icon as={FaLink} />
                        </InputLeftAddon>
                        <Input placeholder={
                              selectedOption.label === 'YouTube'    ?    'https://www.youtube.com/' 
                            : selectedOption.label === 'GitHub'     ?    'https://www.github.com/' 
                            : selectedOption.label === 'Twitch'     ?    'https://www.twitch.com/' 
                            : selectedOption.label === 'Twitter'    ?    'https://www.twitter.com/'
                            : selectedOption.label === 'Linkedin'   ?    'https://www.linkedin.com/' 
                            : selectedOption.label === 'Instagram'  ?    'https://www.instagram.com' 
                            : ''
                            } 
                        bg={'white'} w={'100%'} />
                    </InputGroup>
                </Flex>

            </Flex>
        </Box>
    );
}
