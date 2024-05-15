import { Box, Text, Flex } from '@chakra-ui/react'
import ProfilePicUpload from './ProfilePicUpload'

export default function ProfilePicSection() {
    return (
        <Box bg='gray.100' h='200px' p={4} borderRadius={'md'}>

            <Flex flexDir={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Text color={'gray.500'} as='b'>Profile Picture</Text>
                <ProfilePicUpload url='https://upload.wikimedia.org/wikipedia/commons/a/a9/Interview_with_Timoth%C3%A9e_Chalamet%2C_2019.png'/>
                <Flex color={'gray.500'}mr={5}flexDir={'column'}>
                <Text fontSize={'xs'}>Image must be below 1024X1024px.</Text>
                <Text fontSize={'xs'}>Use PNG, JPG, or BMP format.</Text>
                </Flex>
            </Flex>

        </Box>
    )
}