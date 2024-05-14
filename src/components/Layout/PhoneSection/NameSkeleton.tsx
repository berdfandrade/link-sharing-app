import { Box, Flex, Center} from '@chakra-ui/react'


export default function NameSkeleton() {
    return (
        <>  
            <Flex flexDir='column' gap='3'>
            
            <Box bg='gray.200' borderRadius='md' w='170px' h='10px'/>
            <Box mr={'auto'} ml={'auto'}bg='gray.200' borderRadius='md' w='100px' h='10px'/>
            
            </Flex>
  
        </>
    )
}