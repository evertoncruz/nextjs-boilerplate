import * as S from './styles'

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>Boileplate!</S.Title>
      <S.Logo
        src="/img/shortcut-icon.png"
        alt="Imagem de um atomo na cor azul marinho dentro de um círculo preto"
      />
      <S.Description>
        Boilerplate construído com Typescript, Next.js, Styled Components, Jest,
        React Testing Library.
      </S.Description>
    </S.Wrapper>
  )
}

export default Main
