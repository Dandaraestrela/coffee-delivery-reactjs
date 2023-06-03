import {
  Alarm,
  Coffee,
  ShoppingCartSimple,
  Package,
} from "@phosphor-icons/react";

import * as S from "./Banner.styles";

import PrincipalCoffee from "@/assets/PrincipalCoffee.png";
import { theme } from "@/styles/theme";

const tags = [
  {
    id: 0,
    icon: (
      <ShoppingCartSimple size={16} color={theme.colors.white} weight="fill" />
    ),
    color: theme.colors.yellowDark,
    text: "Compra simples e segura",
  },
  {
    id: 1,
    icon: <Package size={16} color={theme.colors.white} weight="fill" />,
    color: theme.colors.baseText,
    text: "Embalagem mantém o café intacto",
  },
  {
    id: 2,
    icon: <Alarm size={16} color={theme.colors.white} weight="fill" />,
    color: theme.colors.yellow,
    text: "Entrega rápida e rastreada",
  },
  {
    id: 3,
    icon: <Coffee size={16} color={theme.colors.white} weight="fill" />,
    color: theme.colors.purple,
    text: "O café chega fresquinho até você",
  },
];

export function Banner() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>
        <S.Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </S.Subtitle>
        <S.TagsWrapper>
          {tags.map((tag) => (
            <S.Tag key={tag.id}>
              <S.TagImage backgroundColor={tag.color}>{tag.icon}</S.TagImage>
              {tag.text}
            </S.Tag>
          ))}
        </S.TagsWrapper>
      </S.Content>
      <S.CoverImage src={PrincipalCoffee} alt="ilustrative coffee" />
    </S.Wrapper>
  );
}
