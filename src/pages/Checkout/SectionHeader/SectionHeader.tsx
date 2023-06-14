import * as S from "./SectionHeader.styles";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
}

export function SectionHeader({ title, subtitle, icon }: SectionHeaderProps) {
  return (
    <S.Wrapper>
      {icon}
      <S.TextSection>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.TextSection>
    </S.Wrapper>
  );
}
