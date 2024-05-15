import MainLayout from './components/Layout/MainLayout'
import { StateProvider } from './context/StateContext/StateLinkProvider'

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
