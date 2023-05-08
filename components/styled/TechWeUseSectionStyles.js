import styled from "styled-components";
import { devices } from "./Global";
export const StyledTechWeUseSection = styled.div`
  grid-column: center-start / center-end;

  padding: 6rem;

  & .container {
    display: flex;
    align-items: center;
    gap: 6rem;
    display: grid;
    grid-template-columns: minmax(24rem, max-content) 1fr;
    margin-bottom: 4rem;
    
    @media only screen and ${devices.md} {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, min-content);
      row-gap: 2rem;
      box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
    }
  }

  & .toggle-box {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    width: 100%;
    padding: 2rem;
    gap: 2rem;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
    position: relative;
    @media only screen and ${devices.md} {
      grid-row: 1 / span 1;
      padding: 3rem;
      box-shadow: none;
    }
    &::before {
      content: "";
      height: 100%;
      width: 4px;
      background-color: ${({ theme }) => theme.color.primary};
      position: absolute;
      left: -1px;
    }
  }
  // & .slider {
  //   @media only screen and ${devices.md} {
  //     grid-row: 2 / span 1;
  //   }
  }
`;
