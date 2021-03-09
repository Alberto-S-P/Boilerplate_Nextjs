import * as S from "./style";

const Main = ({
  title = "React Avançado",
  description = "Typescript, ReactJs, NextJS e Styled Components",
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="/img/hero-illustration.png"
      alt="Um desenvolvedor em uma mesa"
    />
  </S.Wrapper>
);

export default Main;
