import { keyframes } from "styled-components";
import styled from "styled-components";
import { devices } from "./Global";
export const StyledFooterSection = styled.div`
  grid-column: full-start / full-end;
  padding: 12rem 2rem;
  display: grid;
  grid-template-columns:
    minmax(min-content, 30rem) repeat(2, minmax(min-content, 15rem))
    minmax(max-content, 1fr);
  column-gap: 4rem;
  row-gap: 5rem;
  grid-template-rows: repeat(3, min-content);
  background-color: #faebd7;

  @media only screen and ${devices.md} {
    grid-template-columns: repeat(2, minmax(min-content, 15rem)) minmax(min-content, 1fr);
    column-gap: 2rem;

  grid-template-rows: repeat(4, min-content);

  }

  @media only screen and ${devices.sm}{
    grid-template-columns: repeat(3,1fr);
    grid-template-rows:repeat(4,auto);
  }

  & .contact-card {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
    background-color: ${({ theme }) => theme.color.tertiary};
   
    padding: 2rem;
    align-items: flex-start;

    @media only screen and ${devices.md} {
    grid-column: 1 / -1;
    grid-row: 3 / span 1;

    }
     @media only screen and ${devices.sm} {
    grid-column: 1 / 2;
    grid-row: 2 / span 1;

    }
    
  }
  .contact-card__title {
    align-self: flex-start;
    padding: 2rem;
    color: ${({ theme }) => theme.color.primary};
  }
  & .card__icon-box {
    height: 2rem;
    width: 2rem;
  }
  & .contact-card__item {
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding: 2rem;
    gap: 2rem;
  }
  & .contact-card__text {
    line-height: 1.8;
  }

  //footer Nav====>
 
  }
  & .our-links {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    align-items: center;
    justify-content: center;
       @media only screen and ${devices.md} {
    grid-column: 1 / span 1;
    }
        @media only screen and ${devices.sm} {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;

    }
  }
  & .other-links {
    grid-column: 3 / span 1;
    @media only screen and ${devices.md} {
    grid-column: 2 / span 1;

    }
        @media only screen and ${devices.sm} {
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;

    }
  }

  // CTA  card======================================================>

  & .cta-card {
    grid-column: 4 / span 1;
    box-shadow: none;
    background-color: ${({ theme }) => theme.color.tertiary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.3);
    @media only screen and ${devices.md} {
    grid-column: 3 / span 1;

    }

        @media only screen and ${devices.sm} {
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
    padding:4rem;

    }
  }

  // featured-in-=====================================
  & .featured-in {
    grid-row: 2 / span 1;
    grid-column: 2 /-1;
    display: flex;
    flex-direction: column;

      @media only screen and ${devices.md} {
          grid-row: 2 / span 1;
    grid-column: 1 /-1;
    }
         @media only screen and ${devices.sm} {
          grid-row: 3 / span 1;
    grid-column: 1 /-1;
    }
  }
  & .images-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  & .image-box {
    position: relative;
    width: 20rem;
    height: 20rem;
    backgroudn-color: green;
  }
  & .image {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
  }

  // copy=====================================>

  & .copyright {
    grid-column: 1/-1;
    grid-row: 3 / span 1;
    justify-self: center;
    display: flex;
    width: 70%;
    justify-content: space-around;
    border-top: 1px solid #eee;


     @media only screen and ${devices.md} {
          grid-row: 4 / span 1;
    grid-column: 1 /-1;
    }

        @media only screen and ${devices.sm} {
          grid-row: 4 / span 1;
    grid-column: 1 /-1;
    }
  }
`;
