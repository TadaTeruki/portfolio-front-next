import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { CodeProps } from 'react-markdown/lib/ast-to-react'
import styles from './markdown.module.css'

const CodeBlock = ({ className, children, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || '')
    return (
        <SyntaxHighlighter
            {...props}
            style={docco}
            className={styles.code}
            PreTag="div"
            language={match ? match[1] : 'language-shell'}
        >
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    )
}

const Markdown = (props: { body: string }) => {
    return (
        <>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw, remarkGfm]}
                components={{
                    code: (props) => <CodeBlock {...props} />
                }}
            >
                {props.body}
            </ReactMarkdown>
        </>
    )
}

export default Markdown
