import styled from "styled-components";
import Background from "@/assets/Background.png";
import { MainWrapper } from "@/components/DefaultStyles/Wrappers";

interface TagImageProps {
  backgroundColor: string;
}

export const Wrapper = styled(MainWrapper)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 544px;

  gap: 20px;

  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: "Baloo 2";
  font-size: 48px;
  font-weight: 800;
  line-height: 64px;
`;

export const Subtitle = styled.h2`
  margin: 20px 0 28px 0;

  font-size: 20px;
  font-weight: 400;
`;

export const TagsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 16px;
  max-width: 700px;
`;

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

export const CoverImage = styled.img`
  width: auto;
  height: 360px;
`;
