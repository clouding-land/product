import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { AuthContextProvider } from "./Contexts/AuthContextProvider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
        <App />
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </StrictMode>
);
