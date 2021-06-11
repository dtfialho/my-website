import { Github } from '@styled-icons/fa-brands/Github'
import { Linkedin } from '@styled-icons/fa-brands/Linkedin'
import { Twitter } from '@styled-icons/fa-brands/Twitter'
import { Envelope } from '@styled-icons/fa-solid/Envelope'
import * as S from './styles'

const SocialMedia = () => (
  <S.Container>
    <S.Item>
      <S.Link href="https://github.com/dtfialho" target="_blank" rel="noopener noreferrer" title='Github'>
        <Github title="Ícone do Github" size={30} />
      </S.Link>
    </S.Item>

    <S.Item>
      <S.Link href="https://www.linkedin.com/in/diego-teixeira-fialho-35b58ab0/" target="_blank" rel="noopener noreferrer" title="Linkedin">
        <Linkedin title="Ícone do Linkedin" size={30} />
      </S.Link>
    </S.Item>

    <S.Item>
      <S.Link href="https://twitter.com/dtfialho" target="_blank" rel="noopener noreferrer" title="Twitter">
        <Twitter title="Ícone do Twitter" size={30} />
      </S.Link>
    </S.Item>

    <S.Item>
      <S.Link href="mailto:diego.tfialho@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail">
        <Envelope title="Gmail" size={30} />
      </S.Link>
    </S.Item>
  </S.Container>
)

export default SocialMedia
