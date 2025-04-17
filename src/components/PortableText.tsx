import { PortableText as PortableTextComponent, PortableTextReactComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

interface Props {
  content: PortableTextBlock[]
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <h1 className={`text-4xl font-bold mb-6 text-white ${inter.className}`}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className={`text-3xl font-bold mb-4 text-white ${inter.className}`}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className={`text-2xl font-bold mb-3 text-white ${inter.className}`}>{children}</h3>
    ),
    normal: ({ children }) => (
      <p className={`mb-4 text-gray-400 leading-relaxed ${inter.className}`}>{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className={`border-l-4 border-gray-300 pl-4 italic my-4 text-white ${inter.className}`}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className={`list-disc pl-6 mb-4 space-y-2 text-white ${inter.className}`}>{children}</ul>
    ),
    number: ({ children }) => (
      <ol className={`list-decimal pl-6 mb-4 space-y-2 text-white ${inter.className}`}>{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className={`font-bold text-yellow-400 ${inter.className}`}>{children}</strong>
    ),
    em: ({ children }) => (
      <em className={`italic text-gray-700 ${inter.className}`}>{children}</em>
    ),
    code: ({ children }) => (
      <code className={`bg-gray-100 px-1 py-0.5 rounded text-gray-800 font-mono ${inter.className}`}>{children}</code>
    ),
  },
}

export default function PortableText({ content }: Props) {
  return (
    <div className={`prose max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-strong:text-gray-800 prose-em:text-gray-700 ${inter.className}`}>
      <PortableTextComponent value={content} components={components} />
    </div>
  )
} 