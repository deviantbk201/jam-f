import styled from "styled-components";

export const StyledNavOverlay = styled.div`
  width: 100vw;
  height: 99vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: minmax(min-content, 3fr) minmax(min-content, 2fr);
  trnasition: all 0.3s;
  // =-=============================left container====================
  & .container-left {
    grid-column: 1 / span 1;
    background-color: ${({ theme }) => theme.color.primary};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
  & .nav-link-container > a:nth-child(2) {
    font-szie: 3.2rem !important;
  }
  & .nav-link-container > a:nth-child(3) {
    font-size: 4.8rem !important;
  }
  & .nav-link-container > a {
    font-size: 2.4rem !important;
  }

  & .social-link-container {
    display: flex;
    justify-items: space-around;
  }
  // =================================right container============
  & .container-right {
    grid-column: 2 / span 1;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    & .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 60%;
      gap: 4rem;
    }
    & .signature {
      text-align: right;
    }
  }
`;
