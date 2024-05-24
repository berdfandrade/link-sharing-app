import { createContext, useContext, useState, ReactNode } from "react";

interface Link {
  platform: string;
  url: string;
}

interface GlobalState {
  LINKS: Link[];
  USER: object; // Defina o tipo apropriado se houver mais detalhes
}

interface StateContextType {
  globalObject: GlobalState;
  setGlobalObject: (state: GlobalState) => void;
  updateLinks: (newLink: Link) => void;
  updateLinkAtIndex: (index: number, updatedLink: Link) => void;
  removeLink: (index: number) => void;
}

const StateLinkContext = createContext<StateContextType | undefined>(undefined);

export const useStateLinkContext = () => {
  const context = useContext(StateLinkContext);
  if (!context) {
    throw new Error("useStateLinkContext must be used within a StateProvider");
  }
  return context;
};

interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider = ({ children }: StateProviderProps) => {
  const [globalObject, setGlobalObject] = useState<GlobalState>({
    LINKS: [],
    USER: {},
  });

  const updateLinks = (newLink: Link) => {
    setGlobalObject((prevState) => ({
      ...prevState,
      LINKS: [...prevState.LINKS, newLink],
    }));
  };

  const updateLinkAtIndex = (index: number, updatedLink: Link) => {
    setGlobalObject((prevState) => {
      const newLinks = [...prevState.LINKS];
      newLinks[index] = updatedLink;
      return {
        ...prevState,
        LINKS: newLinks,
      };
    });
  };

  const removeLink = (index: number) => {
    setGlobalObject((prevState) => {
      const newLinks = [...prevState.LINKS];
      newLinks.splice(index, 1);
      return {
        ...prevState,
        LINKS: newLinks,
      };
    });
  };

  return (
    <StateLinkContext.Provider value={{ globalObject, setGlobalObject, updateLinks, updateLinkAtIndex, removeLink }}>
      {children}
    </StateLinkContext.Provider>
  );
};
