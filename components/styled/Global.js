import { createGlobalStyle } from "styled-components";

const breakpoints = {
  xs: "20em", //320PX  7PX
  sm: "37.5em", //600PX 8PX
  md: "48em", //768PX 9PX
  lg: "64em", //1024PX10PX
  xl: "75em", //1200PX 10PX
  "2xl": "96em", // 1535PX
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  "2xl": `(max-width: ${breakpoints["2xl"]})`,
};

const GlobalStyles = createGlobalStyle`



* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-size:62.5%;
  font-family: sans;

   @media only screen and ${devices.xl}{
     font-size: 56.25% ;
  }

     @media only screen and ${devices.lg}{
     font-size: 50% ;

}
  @media only screen and ${devices.sm}{
     font-size: 10% ;
  }
}

body{
  margin-bottom:6rem;
}
image{
  max-width:100%;
}



`;
export const Theme = {
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

export default GlobalStyles;
