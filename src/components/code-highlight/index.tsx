import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type CodeHighlightProps = {
  language?: string
  value: string
}

const CodeHighlight = ({ language = '', value }: CodeHighlightProps) => (
  <SyntaxHighlighter
    language={language}
    style={dracula}
    customStyle={{ paddingLeft: '16px', paddingRight: '16px' }}
  >
    {value}
  </SyntaxHighlighter>
)

export default CodeHighlight
