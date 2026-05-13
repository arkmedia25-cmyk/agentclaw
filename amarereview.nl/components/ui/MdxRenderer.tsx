import React from 'react'

interface MdxRendererProps {
  content: string
}

export default function MdxRenderer({ content }: MdxRendererProps) {
  // Simple markdown to HTML converter for display
  const htmlContent = parseMarkdown(content)

  return (
    <article className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent prose-strong:text-primary">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  )
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

function parseMarkdown(markdown: string): string {
  // Escape raw input first to neutralize any injected HTML/scripts.
  // Then selectively re-introduce safe structural tags via regex.
  const safe = escapeHtml(markdown)

  let html = safe
    // Headers (content is already escaped)
    .replace(/^### (.*?)$/gm, '<h3 class="text-lg font-bold text-primary mt-6 mb-3">$1</h3>')
    .replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold text-primary mt-8 mb-4">$1</h2>')
    .replace(/^# (.*?)$/gm, '<h1 class="text-3xl font-bold text-primary mt-10 mb-5">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary">$1</strong>')
    // Links — only allow http/https; URL is double-checked after escaping
    .replace(/\[(.*?)\]\((https?:\/\/[^\s)&]+)\)/g, '<a href="$2" class="text-accent hover:underline font-bold" rel="noopener noreferrer" target="_blank">$1</a>')
    // Line breaks to paragraphs
    .replace(/\n\n/g, '</p><p class="text-text-muted mb-4">')
    .replace(/^(?!<[h|p|u|l])(.+)$/gm, '<p class="text-text-muted mb-4">$1</p>')
    // Unordered lists
    .replace(/^\- (.*?)$/gm, '<li class="text-text-muted ml-4">$1</li>')
    .replace(/(<li.*?<\/li>)/s, '<ul class="list-disc pl-6 mb-4">$1</ul>')
    // Inline code
    .replace(/`(.*?)`/g, '<code class="bg-bg-soft px-2 py-1 rounded text-primary font-mono text-sm">$1</code>')

  // Clean up multiple paragraph tags
  html = html.replace(/<\/p>\s*<p/g, '</p>\n<p')

  // Wrap content in paragraphs where needed
  html = `<div class="space-y-4">${html}</div>`

  return html
}
