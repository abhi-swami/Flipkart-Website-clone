import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Box,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";
export default function Logout() {
  const { user, logOut, login } = useUserAuth();

  const adminAvatar =
    "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  const adminName = user.email.substring(0, user.email.indexOf("@"));
  console.log("admin name", adminName);
  return (
    <Box mx={50} zIndex={6}>
      <Menu maxW={"20%"}>
        <MenuButton>
          <Avatar
            size="sm"
            mt={1}
            name="Ryan Florence"
            src={
              adminName === "admin"
                ? adminAvatar
                : "https://bit.ly/ryan-florence"
            }
          />
        </MenuButton>
        <MenuList w={"10%"} mt={1} ml={-10} color={"black"}>
          <MenuGroup textAlign={"left"} title={"Hello " + adminName}>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup textAlign={"left"} title="Help">
            <MenuItem>Docs</MenuItem>
          </MenuGroup>
          <MenuGroup title="">
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
}
