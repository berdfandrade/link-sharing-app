import MainLayout from './components/Layout/MainLayout'
import { StateProvider } from './Context/StateContext/StateLinkProvider'

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
