import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SearchContextProvider from "./Context/SearchContext";

import { store } from "./Redux/store";

=======
import { Provider } from "react-redux";
import {store} from './Redux/store'
>>>>>>> fe664dd64803083eee4263374c2e5df559432f95
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
    {/* <Provider store={store}> */}
      <SearchContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </SearchContextProvider>
      {/* </Provider> */}
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
