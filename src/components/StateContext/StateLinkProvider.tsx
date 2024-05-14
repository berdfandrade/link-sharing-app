import { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalState {
  LINKS: object[]; // ou o tipo adequado para selectOption
  USER: object; // ou o tipo adequado para otherData
}

interface StateContextType {
  globalState: GlobalState;
  setGlobalState: (state: GlobalState) => void;
  updateLinks: (newLinks: object) => void; // Adicionando a propriedade updateLinks
}

const StateLinkContext = createContext<StateContextType | undefined>(undefined);

// Lidando com as exceções na criação do StateProvider 
export const useStateLinkContext = () => {
  const context = useContext(StateLinkContext);
  if (!context) {
    throw new Error('useStateLinkContext must be used within a StateProvider');
  }
  return context;
}

// Interface 
interface StateProviderProps {
  children: ReactNode;
}

// State provider em si
export const StateProvider = ({ children }: StateProviderProps) => {

  // Definimos aqui nosso ESTADO GLOBAL, ou seja o que vamos usar na aplicação inteira!
  const [globalState, setGlobalState] = useState<GlobalState>({
    LINKS: [{
      platform: '',
      url: ''
    }]
    ,
    USER: {}
  });

  // Isso aqui "empurra" os links para o objeto LINKS dentro do estado global
  const updateLinks = (newLinks: object) => {
    setGlobalState(prevState => ({
      ...prevState,
      LINKS: {
        ...prevState.LINKS,
        ...newLinks
      }
    }));
  };


  return (
    <StateLinkContext.Provider value={{ globalState, setGlobalState, updateLinks }}>
      {children}
    </StateLinkContext.Provider>
  );
}