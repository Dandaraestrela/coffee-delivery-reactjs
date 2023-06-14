import styled from "styled-components";

interface RowProps {
  marginTop?: number;
  marginBottom?: number;
  gap?: number;
}

export const Row = styled.div<RowProps>`
  display: flex;
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  gap: ${({ gap }) => gap}px;
`;
