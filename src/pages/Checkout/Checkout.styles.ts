import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  padding: 32px 10rem;
  gap: 12px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 12px;
  :last-of-type {
    width: 40%;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${({ theme: { colors } }) => colors.baseCard};
  border-radius: 6px;
`;

export const UserInfo = styled(DetailsWrapper)``;

export const ProductsInfo = styled(DetailsWrapper)``;

export const Title = styled.h1`
  font-family: "Baloo 2";
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
`;
