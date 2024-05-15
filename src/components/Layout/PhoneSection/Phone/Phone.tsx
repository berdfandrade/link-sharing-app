import { Box, Center, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IPhone {
    children: ReactNode
}

export default function Phone({ children }: IPhone) {
    return (
        <Box 
            mt={78} 
            minH={'700px'} 
            h='700px'
            minW={'350px'} p={3}
            pb={4} borderWidth={2}
            pt={3}
            borderColor={'#bababa'}
            borderRadius={'60'}>
            {/* TELA */}
            <Box borderWidth={2} h='100%' w='100%' borderColor={'#bababa'} borderRadius={'50'}>
                <Center>
                    {/* Notch */}
                    <Box
                        mt='3'
                        borderWidth={2}
                        borderColor={'#bababa'}
                        p={1}
                        borderRadius={'100'}
                        alignItems={"center"}
                        w={'130px'}
                        h='30px'
                    >
                        <Flex justifyContent='flex-end'>
                            {/* Camera */}
                            <Box boxSize={'20px'} p={1} borderRadius='100%' borderColor='#bababa' borderWidth={1}>
                                {/* Lente */}
                                <Box
                                    borderWidth={1}
                                    borderRadius='100%'
                                    borderColor='#bababa'
                                    boxSize={'11px'}
                                    marginLeft={'auto'}
                                ></Box>
                            </Box>
                        </Flex>
                    </Box>

                </Center>
                <Box p={5}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}