import { Minus, Plus } from "@phosphor-icons/react";
import * as S from "./QuantitySelector.styles";
import { theme } from "@/styles/theme";

interface QuantitySelectorProps {
  quantity: number;
  onAdd: () => void;
  onSub: () => void;
}

export function QuantitySelector({
  quantity,
  onAdd,
  onSub,
}: QuantitySelectorProps) {
  return (
    <S.QuantitySelector>
      <S.QuantityButton type="button" onClick={() => onSub()}>
        <Minus size={14} color={theme.colors.purple} weight="bold" />
      </S.QuantityButton>
      {quantity}
      <S.QuantityButton type="button" onClick={() => onAdd()}>
        <Plus size={14} color={theme.colors.purple} weight="bold" />
      </S.QuantityButton>
    </S.QuantitySelector>
  );
}
