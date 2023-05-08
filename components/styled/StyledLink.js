import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    padding: 0.2rem 0.6rem;
    transition: al 0.3s;
    font-size: 1.4rem;
    font-weight: 600;

    color: ${({ theme }) => theme.color.black};

    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  &:hover,
  &:active {
    scale: 1.2;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};

    border-radius: 9px;
  }
`;
