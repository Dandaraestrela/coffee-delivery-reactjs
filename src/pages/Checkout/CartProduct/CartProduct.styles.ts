import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ProductImg = styled.img`
  width: 64px;
  height: 64px;
`;

export const NameAndActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  font-size: 16px;
  span {
    font-size: 14px;
    color: ${({ theme: { colors } }) => colors.baseLabel};
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  height: fit-content;

  gap: 4px;
  padding: 8px;

  background-color: ${({ theme: { colors } }) => colors.baseButton};
  border: none;

  border-radius: 6px;
  font-size: 12px;
  text-transform: uppercase;

  @media (max-width: 1300px) {
    gap: 0;
    font-size: 0px;
  }
`;

export const TotalPrice = styled.p`
  margin-left: auto;
  font-weight: 700;
  font-size: 16px;
`;
