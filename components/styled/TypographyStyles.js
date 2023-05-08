import styled from "styled-components";

export const StyledSecondaryHeading = styled.h2`
  font-size: ${(props) => props.fontSize || "3.2rem"};
  font-weight: ${(props) => props.fontWeight || "700"};
  font-family: ${(props) => props.fontFamily || "sans"};
  text-align: ${(props) => props.textAlign || "left"};
  margin-bottom: ${(props) => props.marginBottom || "2.4rem"};
  color: ${(props) => props.color || "#000"};
`;

export const StyledTertiaryHeading = styled.h3`
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: ${(props) => props.fontWeight || "400"};
  font-family: ${(props) => props.fontFamily || "sans"};
  text-align: ${(props) => props.textAlign || "left"};
  margin-bottom: ${(props) => props.marginBottom || "1.8rem"};
  color: ${(props) => props.color || "#000"};
`;
export const StyledSubHeading = styled.h3`
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: ${(props) => props.fontWeight || "400"};
  font-family: ${(props) => props.fontFamily || "sans"};
  text-align: ${(props) => props.textAlign || "left"};
  margin-bottom: ${(props) => props.marginBottom || "1.8rem"};
  color: ${(props) => props.color || "#777"};
`;

export const StyledText = styled.p`
  font-size: ${(props) => props.fontSize || "1.6rem"};
  font-weight: ${(props) => props.fontWeight || "400"};
  font-family: ${(props) => props.fontFamily || "sans"};
  text-align: ${(props) => props.textAlign || "left"};
  margin-bottom: ${(props) => props.marginBottom || "1.8rem"};
  line-height: "2";
  color: ${(props) => props.color || "#333"};
`;
