import { Box, Image } from '@chakra-ui/react';

interface IProfilePicUpload {
    url: string;
}

export default function ProfilePicUpload({ url }: IProfilePicUpload) {
    return (
        <Box
            position="relative"
            boxSize={'160px'}
            borderRadius='lg'
            _hover={{'cursor' : 'pointer'}}
        >

            <Image
                borderRadius={'lg'}
                src={url ? url : ''}
                objectFit="cover"
                width="100%"
                height="100%"
                position="absolute"
                top="0"
                left="0"
            />

            </Box>
        
    )
}