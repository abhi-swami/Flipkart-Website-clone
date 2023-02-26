import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SearchContextProvider from "./Context/SearchContext";
import { store } from "./Redux/store";
import LoginContextProvider from "./Context/LoginContext";
import CartContextProvider from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <UserAuthContextProvider>
      <LoginContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <SearchContextProvider>
              <Provider store={store}>
                <App />
              </Provider>
            </SearchContextProvider>
          </BrowserRouter>
        </CartContextProvider>
      </LoginContextProvider>
    </UserAuthContextProvider>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
