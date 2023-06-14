import * as S from "./SectionHeader.styles";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
}

export function SectionHeader({ title, subtitle, icon }: SectionHeaderProps) {
  return (
    <S.Wrapper>
      <S.UpperSection>
        {icon}
        {title}
      </S.UpperSection>
    </S.Wrapper>
  );
}
