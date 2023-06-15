import * as S from "./SelectableButton.styles";

export interface SelectableButtonProps {
  icon: React.ReactNode;
  text: string;
  isSelected?: boolean;
  onClick: () => void;
}

export function SelectableButton({
  icon,
  text,
  isSelected,
  onClick,
}: SelectableButtonProps) {
  return (
    <S.ButtonWrapper type="button" isSelected={isSelected} onClick={onClick}>
      {icon}
      {text}
    </S.ButtonWrapper>
  );
}
