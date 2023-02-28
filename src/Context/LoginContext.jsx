import { useDisclosure } from "@chakra-ui/react";
import { createContext } from "react";

export const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <LoginContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </LoginContext.Provider>
  );
}
