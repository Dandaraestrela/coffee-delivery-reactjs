import styled, { css } from "styled-components";

interface WrapperProps {
  col: number;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${({ col }) => col * (100 / 16)}%;
  gap: 4px;
  font-size: 14px;
`;

export const Input = styled.input`
  ${({ theme: { colors } }) => css`
    height: 44px;
    padding: 12px;
    background-color: ${colors.baseInput};
    border: 1px solid ${colors.baseButton};
    border-radius: 4px;
    color: ${colors.baseLabel};
    font-size: 14px;
    ::placeholder {
      color: ${colors.baseHover};
    }
  `}
`;

export const Error = styled.p`
  height: 12px;
  font-size: 12px;
  color: ${({ theme: { colors } }) => colors.danger};
  text-align: right;
`;
