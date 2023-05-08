import styled from "styled-components";

export const StyledHomePage = styled.div`
  display: grid;
  grid-template-rows: 75vh min-content 45vw 60vw repeat (3, min-content);

  grid-template-columns:
    [full-start] 1fr [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] 1fr[full-end];
`;
