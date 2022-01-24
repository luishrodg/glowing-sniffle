import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <h1>Automação de Email - POC</h1>
      </S.Header>

      <S.Content>
        <S.MapInteraction showControls>
          <S.CardWrapper>
            <S.Card>
              <S.CardHeader>Definições de entrada</S.CardHeader>
              <S.CardContent>
                <S.CardButton>Adicionar entrada</S.CardButton>
              </S.CardContent>
            </S.Card>
            <S.ActionButton onClick={() => console.log("teste")}>
              +
            </S.ActionButton>
          </S.CardWrapper>

          <S.CardWrapper>
            <S.Card>
              <S.CardHeader>Definições de entrada</S.CardHeader>
              <S.CardContent>
                <S.CardButton>Adicionar entrada</S.CardButton>
              </S.CardContent>
            </S.Card>
            <S.ActionButton>+</S.ActionButton>
          </S.CardWrapper>

          <S.CardWrapper>
            <S.Card>
              <S.CardHeader>Definições de entrada</S.CardHeader>
              <S.CardContent>
                <S.CardButton>Adicionar entrada</S.CardButton>
              </S.CardContent>
            </S.Card>
            <S.ActionButton>+</S.ActionButton>
          </S.CardWrapper>
        </S.MapInteraction>
      </S.Content>
    </S.Container>
  );
};

export default Home;
