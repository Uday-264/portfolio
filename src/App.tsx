import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { enableMultiTheme, themeColor } from "./me";
import { ITheme } from "./me.interface";
import { Home } from "./pages/Home/Home";
import theme from "./theme";

// ColorScheme Context
export const ColorSchemeContext = createContext<{
  colorScheme: ITheme;
  setColorScheme: (colorScheme: ITheme) => void;
}>({
  colorScheme: themeColor,
  setColorScheme: () => {},
});

function App() {
  const savedTheme = enableMultiTheme ? localStorage.getItem("themeColor") as ITheme : themeColor;
  const [colorScheme, setColorScheme] = useState(savedTheme || themeColor);
  useEffect(() => {
    ReactGA.send("pageview");
  }, []);

  useEffect(() => {
    localStorage.setItem("themeColor", colorScheme);
  }, [colorScheme]);

  const nextTheme = extendTheme(theme, {
    colors: {
      brand: theme.colors[colorScheme],
    },
  });

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      <ChakraProvider theme={nextTheme}>
        <Home />
      </ChakraProvider>
    </ColorSchemeContext.Provider>
  );
}

export default App;
