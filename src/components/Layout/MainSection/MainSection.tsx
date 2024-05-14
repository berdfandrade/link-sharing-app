import {Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface IMainSection {
    children : ReactNode
}

export default function MainSection ({children } : IMainSection) {
   return (
     <Box width="60%" bg='white' p={10} borderRadius='md' height="100%">
        {children}
     </Box> 
   )
  
}