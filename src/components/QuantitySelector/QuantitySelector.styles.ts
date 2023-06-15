import styled from "styled-components";

export const QuantitySelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: fit-content;

  padding: 8px;
  gap: 6px;

  background-color: ${({ theme: { colors } }) => colors.baseButton};

  border-radius: 6px;

  font-size: 16px;
  line-height: 16px;
  color: ${({ theme: { colors } }) => colors.baseTitle};
`;

export const QuantityButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: none;
  border-radius: 6px;
  border: none;
`;
