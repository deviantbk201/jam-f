// import '@/styles/globals.css'
import GlobalStyles from "@/components/styled/Global";
import Header from "@/components/organisms/Header";
import { ThemeProvider } from "styled-components";
import Layout from "@/components/Layout";

const theme = {
  color: {
    primary: "#f73365",
    secondary: "#8057bd",
    secondaryDark: "#4F317D",
    tertiary: "rgb(255, 223, 211)",
    white: "#fff",
    black: "#000",
    greyDark: "#666",
  },
};
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ThemeProvider>
  );
}
