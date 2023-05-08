import styled from "styled-components";

export const StyledButtonLink = styled.a`
  &:link,
  &:visited {
    color: ${(props) => props.color || "#fff"};
    background-color: ${(props) => props.bg || "#000"};
    text-decoration: none;
    font-size: 2rem;
    padding: 2rem 6rem;
    border-radius: 9px;
    text-transform: uppercase;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: ${(props) => props.colorHover};
    background-color: ${(props) => props.bgHover};
    transform: translateY(0.2rem);
  }
`;
