import styled from "styled-components";
import { devices } from "./Global";
export const StyledWhyUsSection = styled.div`
  grid-column: full-start / full-end;
  height: min-content;
  padding: 4rem;
  background-image: linear-gradient(
    96deg,
    ${({ theme }) => theme.color.secondary} 0% 50%,

    ${({ theme }) => theme.color.secondaryDark} 50% 100%
  );
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and ${devices.lg} {
    grid-autoflow: row;
    grid-template-columns: 1fr;
    background-image: linear-gradient(
      96deg,
      ${({ theme }) => theme.color.secondary},
      ${({ theme }) => theme.color.secondaryDark}
    );
  }
  & .img-box {
    grid-column: 1 / span 1;
    position: relative;
  }
  & .img {
    object-fit: cover;
  }
  & .text-box {
    grid-column: 2 / span 1;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(2, min-content);
    align-items: center;
    justify-items: center;
  }
  & .heading-main {
    font-size: 4.2rem;
  }
  & .description {
    line-height: 1.8;
  }

  & .btn {
    box-shadow: 0 2rem 4rem rgba(247, 51, 101, 0.6);
  }
`;
