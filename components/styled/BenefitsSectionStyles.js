import styled from "styled-components";
import { devices } from "./Global";
export const StyledBenefitsSection = styled.div`
  grid-column: full-start / full-end;
  padding: 2rem 12rem;
  display: grid;
  grid-template-rows: min-content minmax(min-content. 49vw);
  row-gap: 4.2rem;
  & .section-heading-box {
    grid-row: 1 / span 1;
  }

  & .cards-container {
    grid-row: 2 / span 1;
    height: min-content;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));

    @media only screen and ${devices.md} {
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    }
    column-gap: 4rem;
    row-gap: 4rem;
  }

  & .card {
  }
  & .card-img-box {
    width: 100%;
    height: 16rem;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
    margin-bottom: 2.4rem;
  }
  & .card-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  & .card-details {
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.1);
      background-color: ${({ theme }) => theme.color.secondaryDark};
      border-radius: 8px;
      & .card-text,
      .card-title {
        color: ${({ theme }) => theme.color.white};
      }
    }
  }

  & .card-title {
    margin-bottom: 0;
    font-weight: 700;
  }
  & .card-text {
    padding: 2rem;
  }
`;
