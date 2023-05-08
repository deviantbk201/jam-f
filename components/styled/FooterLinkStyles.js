import styled from "styled-components";

export const StyledFooterLink = styled.a`
  &:link,
  &:visited {
    color: ${({ theme }) => theme.color.greyDark};
    font-size: 1.8rem;
    text-transform: upperrcase;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    transform: scale(1.2) translateX(2rem);
    color: ${({ theme }) => theme.color.primary};
  }
`;
