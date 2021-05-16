// import Navbar from 'components/main-navigation'
import * as S from './styles'

const Header = ({ fixed = false }) => (
  <S.Wrapper fixed={fixed}>
    <S.LogoLink href="/">
      <svg
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <title>Logo em um formato que representa código</title>
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill="#ffffff"
          stroke="none"
        >
          <path d="M2317 2573 c-219 -1050 -397 -1914 -397 -1920 0 -10 55 -13 243 -13 l243 0 397 1908 c219 1049 397 1913 397 1920 0 9 -55 12 -243 12 l-243 0 -397 -1907z" />
          <path d="M635 3200 l-640 -640 640 -640 640 -640 325 0 325 0 -640 640 -640 640 640 640 640 640 -325 0 -325 0 -640 -640z" />
          <path d="M3835 3200 l640 -640 -640 -640 -640 -640 325 0 325 0 640 640 640 640 -640 640 -640 640 -325 0 -325 0 640 -640z" />
        </g>
      </svg>
    </S.LogoLink>
    {/* <Navbar /> */}
  </S.Wrapper>
)

export default Header
