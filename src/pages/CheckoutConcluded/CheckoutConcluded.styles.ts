import styled, { css } from "styled-components";

import { MainWrapper } from "@/components/DefaultStyles/Wrappers";

export const Wrapper = styled(MainWrapper)`
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: "Baloo 2";
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  color: ${({ theme: { colors } }) => colors.yellowDark};
`;

export const Subtitle = styled.p`
  margin-bottom: 40px;
  font-size: 20px;
  line-height: 130%;
  color: ${({ theme: { colors } }) => colors.baseSubtitle};
`;

export const OrderInfo = styled.div`
  ${({ theme: { colors } }) =>
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 500px;
      height: 240px;
      gap: 24px;
      padding: 40px;
      background: linear-gradient(${colors.background}, ${colors.background})
          padding-box,
        linear-gradient(110deg, ${colors.yellow}, ${colors.purple}) border-box;
      border-radius: 6px 36px;
      border: 2px solid transparent;
    `}
`;

export const DeliveryImg = styled.img`
  width: 490px;
  height: fit-content;
`;
