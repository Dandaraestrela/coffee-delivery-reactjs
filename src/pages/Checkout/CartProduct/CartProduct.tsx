import { QuantitySelector } from "@/components/QuantitySelector/QuantitySelector";
import * as S from "./CartProduct.styles";
import { Trash } from "@phosphor-icons/react";
import { theme } from "@/styles/theme";

interface CartProductProps {
  imgSrc: string;
  productName: string;
  quantity: number;
  unitPrice: string;
  totalPrice: number;
  onAdd: () => void;
  onSub: () => void;
  onRemove: () => void;
}

export function CartProduct({
  imgSrc,
  productName,
  quantity,
  unitPrice,
  totalPrice,
  onAdd,
  onSub,
  onRemove,
}: CartProductProps) {
  return (
    <S.Wrapper>
      <S.ProductImg src={imgSrc} />
      <S.NameAndActionsWrapper>
        {productName}
        <S.ActionsWrapper>
          <QuantitySelector onAdd={onAdd} onSub={onSub} quantity={quantity} />
          <S.RemoveButton type="button" onClick={onRemove}>
            <Trash size={16} color={theme.colors.purple} />
            Remover
          </S.RemoveButton>
        </S.ActionsWrapper>
      </S.NameAndActionsWrapper>
    </S.Wrapper>
  );
}
