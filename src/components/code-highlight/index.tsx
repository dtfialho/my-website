import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type CodeHighlightProps = {
  language?: string
  value: string
}

const CodeHighlight = ({ language = '', value }: CodeHighlightProps) => (
  <SyntaxHighlighter
    language={language}
    style={dracula}
    customStyle={{
      paddingLeft: '16px',
      paddingRight: '16px',
      marginBottom: '24px'
    }}
  >
    {value}
  </SyntaxHighlighter>
)

export default CodeHighlight
