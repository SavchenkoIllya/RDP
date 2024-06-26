import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./Locales/i18n";
import { HelmetProvider } from "react-helmet-async";

// this library let you make language translations
// for static information on your web site
// if you see next construction t("key")
// that's the way to translate this data
// all you that you need you can find in directory "../public/locales"
// folders named as languages that we have provided
// inside you would see json files with translation keys values pairs
// default language is russian

import App from "./Pages/App";
import { Provider } from "react-redux";
import { store } from "@utils/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
