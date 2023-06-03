import styled from "styled-components";
import { MainWrapper } from "../DefaultStyles/Wrappers";

export const Wrapper = styled(MainWrapper)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;

  padding: 8px;
  gap: 8px;

  background-color: ${({ theme: { colors } }) => colors.purpleLight};
  border-radius: 8px;

  color: ${({ theme: { colors } }) => colors.purpleDark};
  font-size: 14px;

  cursor: default;
`;

export const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${({ theme: { colors } }) => colors.yellowLight};
  border-radius: 8px;

  border: none;

  cursor: pointer;
`;
