import styled from "styled-components";
import { devices } from "./Global";
export const StyledQuestionsSection = styled.div`
  grid-column: full-start / full-end;
  display: flex;
  align-items: center;
  justify-content: Center;
  padding: 2rem;
  background-image: url(/bg__with-dotted.svg);
  background-position: center;

  @media only screen and (${devices.xl}) {
    padding: 1rem;
  }

  & .container {
    height: 30vw;
    width: 90%;
    padding: 6rem 2rem;
    display: grid;
    grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 2fr);
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.1);
    column-gap: 4rem;
    background-image: url(/bg__with-dotted.svg),
      linear-gradient(
        90deg,
        ${({ theme }) => theme.color.secondaryDark},
        ${({ theme }) => theme.color.primary}
      );
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 190% 45%;

    @media only screen and (${devices.lg}) {
      height: 40rem;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, minmax(18rem, 24rem));
      background-image: linear-gradient(
        90deg,
        ${({ theme }) => theme.color.secondaryDark},
        ${({ theme }) => theme.color.primary}
      );
      padding: 2rem;
    }
  }

  & .text-box {
    grid-column: 1 / span 1;
    @media only screen and (${devices.lg}) {
      grid-row: 1 / span 1;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
  }
  & .bar {
    height: 1rem;
    width: 12rem;
    background-image: linear-gradient(
      90deg,
      ${({ theme }) => theme.color.secondaryDark},
      ${({ theme }) => theme.color.primary}
    );
    border-radius: 9px;
  }
  & .card-container {
    grid-column: 2 / span 1;
    display: grid;
    grid-template-columns: repeat(3, minmax(10rem, 1fr));
    gap: 4rem;

    @media only screen and (${devices.lg}) {
      grid-column: 1 / span 1;
      grid-row: 2 / span 1;
      grid-template-columns: repeat(2, minmax(10rem, 1fr));
    }
  }

  & .card {
    width: 100%;
    align-items: center;
    justify-content: start;
    background-color: #fff;
    padding: 1rem;

    &__start-chat {
      display: none;
    }
  }
  & .card-image {
    height: 80%;
    width: 100%;
  }
  & .btn {
    padding: 1rem 3rem;
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
  }
`;
