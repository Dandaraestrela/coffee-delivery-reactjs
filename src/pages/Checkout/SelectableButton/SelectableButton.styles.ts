import styled, { css } from "styled-components";

interface WrapperProps {
  isSelected?: boolean;
}

export const ButtonWrapper = styled.button<WrapperProps>`
  display: flex;
  width: 100%;

  padding: 16px;
  gap: 12px;

  background-color: ${({ theme: { colors } }) => colors.baseButton};

  border: 1px solid transparent;
  border-radius: 6px;

  font-size: 12px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.baseText};

  :focus,
  :focus-within {
    outline: none;
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      border: 1px solid ${theme.colors.purple};
      background-color: ${theme.colors.purpleLight};
    `}
`;
