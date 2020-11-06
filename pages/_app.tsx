import { ThemeProvider } from "styled-components";
import {defaultTheme, GlobalStyle} from "../theme";

function MyApp({ Component }: any) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component />
    </ThemeProvider>
  );
}

export default MyApp;
