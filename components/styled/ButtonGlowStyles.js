import styled from "styled-components";
import { keyframes } from "styled-components";

const btnGlow = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0rem 0rem rgba(247, 51, 101, 1);
  }
  50% {
    transform: scale(1.01);
    box-shadow: 0 0rem 4rem rgba(247, 51, 101, 1);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0rem 0rem rgba(247, 51, 101, 1);
  }
`;

export const StyledButtonGlow = styled.a`
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

    box-shadow: 0 2rem 4rem rgba(247, 51, 101, 1);
    border: 1px solid ${({ theme }) => theme.color.primary};
    transition: all 0.3s;
    animation: ${btnGlow} 2.4s linear infinite;
    backface-visiblity: none;
  }

  &:hover,
  &:active {
    color: ${(props) => props.colorHover};
    background-color: ${(props) => props.bgHover};
    transform: translateY(0.2rem);
  }
`;
