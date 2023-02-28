import React from "react";
import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useUserAuth } from "../../Context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const toast = useToast();
  let { user } = useUserAuth();

  if (!user) {
    toast({
      title: "Please Login First",
      description: "Please Login First",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
