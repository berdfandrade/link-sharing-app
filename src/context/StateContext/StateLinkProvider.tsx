import { createContext, useContext, useState, ReactNode } from "react";

interface Link {
  platform: string;
  url: string;
}

interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  profileImage?: string | null;
}

interface GlobalState {
  LINKS: Link[];
  USER: User;
}

interface StateContextType {
  globalObject: GlobalState;
  setGlobalObject: (state: GlobalState) => void;
  updateLinks: (newLink: Link) => void;
  updateLinkAtIndex: (index: number, updatedLink: Link) => void;
  removeLink: (index: number) => void;
  setProfileImage: (imageUrl: string | null) => void;
  setUserInfo: (userInfo: Partial<User>) => void;
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
    USER: {
      firstName: '',
      lastName: '',
      email: '',
      profileImage: null,
    },
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

  const setProfileImage = (imageUrl: string | null) => {
    setGlobalObject((prevState) => ({
      ...prevState,
      USER: {
        ...prevState.USER,
        profileImage: imageUrl,
      },
    }));
  };

  const setUserInfo = (userInfo: Partial<User>) => {
    setGlobalObject((prevState) => ({
      ...prevState,
      USER: {
        ...prevState.USER,
        ...userInfo,
      },
    }));
  };

  return (
    <StateLinkContext.Provider value={{ globalObject, setGlobalObject, updateLinks, updateLinkAtIndex, removeLink, setProfileImage, setUserInfo }}>
      {children}
    </StateLinkContext.Provider>
  );
};
