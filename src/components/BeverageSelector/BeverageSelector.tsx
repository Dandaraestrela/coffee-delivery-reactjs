import toast from "react-hot-toast";
import { useContext, useState } from "react";

import * as S from "./BeverageSelector.styles";

import { theme } from "@/styles/theme";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { CartContext } from "@/contexts/CartContext";
import { QuantitySelector } from "../QuantitySelector/QuantitySelector";

interface BeverageProps {
  id: string;
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: string;
}

export function BeverageSelector({
  id,
  image,
  tags,
  name,
  description,
  price,
}: BeverageProps) {
  const { addProductToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const removeBeverage = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const addBeverage = () => {
    setQuantity((prev) => prev + 1);
  };

  const onAddToCart = () => {
    addProductToCart(id, quantity);
    toast.success("Produto adicionado ao carrinho!");
  };

  return (
    <S.Wrapper>
      <S.BeverageImage src={image} />
      <S.TagsWrapper>
        {tags?.map((tag) => (
          <S.Tag key={tag}>{tag}</S.Tag>
        ))}
      </S.TagsWrapper>
      <S.Title>{name}</S.Title>
      <S.Subtitle>{description}</S.Subtitle>
      <S.FooterWrapper>
        <S.PriceText>
          R$<span>{price}</span>
        </S.PriceText>
        <S.ActionsWrapper>
          <QuantitySelector
            quantity={quantity}
            onAdd={addBeverage}
            onSub={removeBeverage}
          />
          <S.CartButton onClick={onAddToCart}>
            <ShoppingCartSimple
              size={18}
              color={theme.colors.white}
              weight="fill"
            />
          </S.CartButton>
        </S.ActionsWrapper>
      </S.FooterWrapper>
    </S.Wrapper>
  );
}
