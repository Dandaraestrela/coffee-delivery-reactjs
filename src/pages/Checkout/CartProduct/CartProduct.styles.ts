import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const ProductImg = styled.img`
  width: 64px;
  height: 64px;
`;

export const NameAndActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const RemoveButton = styled.button`
  display: flex;
  padding: 8px;
  background-color: ${({ theme: { colors } }) => colors.baseButton};
`;
