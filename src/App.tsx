import { Text } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import MainLayout from './components/Layout/MainLayout'
import { StateProvider } from './components/StateContext/StateLinkProvider'

function App() {


  return (
    <>  
    <StateProvider>
       <MainLayout/>
    </StateProvider>
    </>
  )
}

export default App
