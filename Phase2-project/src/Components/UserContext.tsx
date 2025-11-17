import React, { createContext, useState, ReactNode } from "react";


interface UserContextType {
  username: string;
  setUsername: (name: string) => void;
}

export const UserContext = createContext<UserContextType>({
  username: "",
  setUsername: () => {},
});

interface Props {
  children: ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [username, setUsername] = useState<string>("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
