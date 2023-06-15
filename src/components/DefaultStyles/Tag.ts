import styled, { css } from "styled-components";

interface TagImageProps {
  backgroundColor: string;
}

export const Tag = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`;

export const TagImage = styled.div<TagImageProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.purple};

  border-radius: 50%;
`;
