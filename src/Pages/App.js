import DisableDevtool from "disable-devtool";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CustomRoutes } from "./Routes";
import { GlobalStyle } from "@styles/global-styles";

if (!process.env.NODE_ENV === "development") {
  DisableDevtool();
}

function App() {
  useEffect(() => {
    const handleContextmenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextmenu);

    return () => document.removeEventListener("contextmenu", handleContextmenu);
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CustomRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
