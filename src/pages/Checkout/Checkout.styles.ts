import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  padding: 32px 10rem;
  gap: 12px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 12px;
  :last-of-type {
    width: 40%;
  }
  @media (max-width: 1000px) {
    width: 100%;
    :last-of-type {
      width: 100%;
    }
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${({ theme: { colors } }) => colors.baseCard};
  border-radius: 6px;
`;

export const UserInfo = styled(DetailsWrapper)`
  height: 492px;
`;

export const PaymentInfo = styled(DetailsWrapper)``;

export const ProductsInfo = styled(DetailsWrapper)`
  height: 492px;
`;

export const ProductsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  width: 100%;

  overflow-y: auto;
`;

export const HorizontalDivisor = styled.div`
  width: 100%;
  height: 1px;
  margin-top: auto;
  margin-bottom: 12px;
  background-color: ${({ theme: { colors } }) => colors.baseButton};
`;

export const Title = styled.h1`
  font-family: "Baloo 2";
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
`;

export const TotalInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 4px 0;
`;

export const TotalInfoSmallText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.baseSubtitle};
`;

export const TotalInfoLargeText = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme: { colors } }) => colors.baseSubtitle};
`;

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-top: 8px;
  gap: 4px;
  padding: 8px;

  background-color: ${({ theme: { colors } }) => colors.yellow};
  border: none;

  border-radius: 6px;

  font-size: 14px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.white};
  text-transform: uppercase;

  :disabled {
    background-color: ${({ theme: { colors } }) => colors.baseHover};
    cursor: not-allowed;
  }
`;
