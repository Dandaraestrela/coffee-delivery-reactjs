import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;

  background: ${({ theme: { colors } }) => colors.background};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
