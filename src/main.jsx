import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxLOU9ij4E_KaQxNBUTAF-enWN_WSm1EQ",
  authDomain: "coder-react-9ab42.firebaseapp.com",
  projectId: "coder-react-9ab42",
  storageBucket: "coder-react-9ab42.appspot.com",
  messagingSenderId: "788425692210",
  appId: "1:788425692210:web:d6cc3182b68652a387d82b",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
