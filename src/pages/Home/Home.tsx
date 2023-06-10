import { BeverageSelector } from "@/components/BeverageSelector/BeverageSelector";
import { Banner } from "./Banner/Banner";

import * as S from "./Home.styles";

import { beverages } from "./Home.utils";

export function Home() {
  return (
    <S.Wrapper>
      <Banner />
      <S.BeveragesListWrapper>
        {beverages.map(({ id, image, tags, name, description, price }) => (
          <BeverageSelector
            key={id}
            id={id}
            image={image}
            tags={tags}
            name={name}
            description={description}
            price={price}
          />
        ))}
      </S.BeveragesListWrapper>
    </S.Wrapper>
  );
}
