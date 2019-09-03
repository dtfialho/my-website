import React from 'react'
import * as S from './styled'

const NotFound = () => (
  <S.NotFoundContainer>
    <S.NotFoundTitle>
      404
      <S.NotFoundTitleSub>
        Página não encontrada
      </S.NotFoundTitleSub>
    </S.NotFoundTitle>
    <S.NotFountText>
      Ops... parece que o que você está procurando não existe.
    </S.NotFountText>
  </S.NotFoundContainer>
)

export default NotFound
