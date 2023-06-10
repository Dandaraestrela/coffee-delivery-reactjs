import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 100%;
  height: 300px;

  gap: 16px;
  padding: 110px 20px 20px 20px;

  border-radius: 6px 36px;
  background-color: ${({ theme: { colors } }) => colors.baseCard};
`;

export const BeverageImage = styled.img`
  display: flex;
  position: absolute;
  top: -20px;
  width: 120px;
  height: 120px;
`;

export const Title = styled.h1`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: ${({ theme: { colors } }) => colors.baseSubtitle};
`;

export const Subtitle = styled.h2`
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.baseLabel};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const QuantitySelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 38px;

  padding: 8px;
  gap: 6px;

  background-color: ${({ theme: { colors } }) => colors.baseButton};

  border-radius: 6px;

  font-size: 16px;
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

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  padding: 8px;

  background: ${({ theme: { colors } }) => colors.purpleDark};
  border-radius: 6px;
  border: none;
`;

export const TagsWrapper = styled(ActionsWrapper)``;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;

  background: ${({ theme: { colors } }) => colors.yellowLight};
  border-radius: 100px;

  font-size: 10px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.yellowDark};
`;

export const FooterWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const PriceText = styled.p`
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.baseText};
  span {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 24px;
  }
`;
