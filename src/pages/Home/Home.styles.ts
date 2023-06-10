import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BeveragesListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 40px;
  column-gap: 32px;
  padding: 32px 10rem;

  @media (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
