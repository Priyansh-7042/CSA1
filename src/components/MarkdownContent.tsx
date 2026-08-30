import React from 'react';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  if (!content) return null;

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let currentListType: 'ol' | 'ul' | null = null;
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockLang = '';
  let tableRows: string[][] = [];
  let keyCounter = 0;

  const flushList = () => {
    if (currentList.length > 0 && currentListType) {
      if (currentListType === 'ul') {
        elements.push(
          <ul key={`ul-${keyCounter++}`} className="list-disc list-inside space-y-2 mb-6 text-gray-600 font-poppins">
            {currentList.map((item, idx) => (
              <li key={idx}>{renderFormattedText(item)}</li>
            ))}
          </ul>
        );
      } else {
        elements.push(
          <ol key={`ol-${keyCounter++}`} className="list-decimal list-inside space-y-2 mb-6 text-gray-600 font-poppins">
            {currentList.map((item, idx) => (
              <li key={idx}>{renderFormattedText(item)}</li>
            ))}
          </ol>
        );
      }
      currentList = [];
      currentListType = null;
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const headers = tableRows[0];
      const dataRows = tableRows.slice(1).filter(
        row => !row.every(cell => /^[-:\s]+$/.test(cell))
      );

      elements.push(
        <div key={`table-${keyCounter++}`} className="overflow-x-auto my-8 rounded-2xl border border-gray-200/80 shadow-soft bg-white">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-primary/10 border-b border-gray-200">
                {headers.map((h, i) => (
                  <th key={i} className="px-5 py-3.5 text-sm font-extrabold text-dark-base font-fredoka tracking-wide">
                    {renderFormattedText(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {dataRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-gray-50/80 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-5 py-3.5 text-sm text-gray-700 font-poppins">
                      {renderFormattedText(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
    }
  };

  const renderFormattedText = (text: string): React.ReactNode => {
    const tokens: React.ReactNode[] = [];
    let remaining = text;
    let tokenKey = 0;

    while (remaining.length > 0) {
      const boldMatch = remaining.match(/^(.*?)\*\*(.*?)\*\*(.*)$/);
      const codeMatch = remaining.match(/^(.*?)\`(.*?)\`(.*)$/);
      const linkMatch = remaining.match(/^(.*?)\[(.*?)\]\((.*?)\)(.*)$/);

      const matches = [
        boldMatch ? { type: 'bold', index: boldMatch[1].length, match: boldMatch } : null,
        codeMatch ? { type: 'code', index: codeMatch[1].length, match: codeMatch } : null,
        linkMatch ? { type: 'link', index: linkMatch[1].length, match: linkMatch } : null,
      ].filter(Boolean).sort((a, b) => a!.index - b!.index);

      if (matches.length === 0) {
        tokens.push(remaining);
        break;
      }

      const first = matches[0]!;
      if (first.type === 'bold') {
        const m = first.match;
        if (m[1]) tokens.push(m[1]);
        tokens.push(
          <strong key={`b-${tokenKey++}`} className="font-bold text-dark-base">
            {m[2]}
          </strong>
        );
        remaining = m[3];
      } else if (first.type === 'code') {
        const m = first.match;
        if (m[1]) tokens.push(m[1]);
        tokens.push(
          <code key={`c-${tokenKey++}`} className="bg-gray-100 text-secondary px-1.5 py-0.5 rounded text-sm font-mono font-semibold">
            {m[2]}
          </code>
        );
        remaining = m[3];
      } else if (first.type === 'link') {
        const m = first.match;
        if (m[1]) tokens.push(m[1]);
        tokens.push(
          <a key={`l-${tokenKey++}`} href={m[3]} className="text-secondary underline font-semibold hover:text-secondary/80">
            {m[2]}
          </a>
        );
        remaining = m[4];
      }
    }

    return <>{tokens}</>;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      flushList();
      flushTable();
      if (inCodeBlock) {
        elements.push(
          <div key={`code-${keyCounter++}`} className="my-6 rounded-2xl overflow-hidden shadow-md bg-[#1e1e2e] border border-gray-800">
            {codeBlockLang && (
              <div className="bg-[#181825] px-4 py-1.5 text-xs text-gray-400 font-mono border-b border-gray-800 flex justify-between items-center">
                <span>{codeBlockLang}</span>
              </div>
            )}
            <pre className="p-4 text-gray-100 text-sm font-mono overflow-x-auto leading-relaxed">
              <code>{codeBlockContent.join('\n')}</code>
            </pre>
          </div>
        );
        inCodeBlock = false;
        codeBlockContent = [];
        codeBlockLang = '';
      } else {
        inCodeBlock = true;
        codeBlockLang = trimmed.replace('```', '').trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushList();
      const cells = trimmed
        .split('|')
        .slice(1, -1)
        .map((cell) => cell.trim());
      tableRows.push(cells);
      continue;
    } else {
      flushTable();
    }

    if (trimmed.startsWith('# ')) {
      flushList();
      elements.push(
        <h1 key={`h1-${keyCounter++}`} className="text-3xl font-extrabold text-dark-base mb-6 font-fredoka">
          {trimmed.replace('# ', '')}
        </h1>
      );
    } else if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={`h2-${keyCounter++}`} className="text-2xl font-bold text-dark-base mt-10 mb-4 font-fredoka border-b border-gray-100 pb-2">
          {trimmed.replace('## ', '')}
        </h2>
      );
    } else if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={`h3-${keyCounter++}`} className="text-xl font-bold text-dark-base mt-6 mb-3 font-fredoka">
          {trimmed.replace('### ', '')}
        </h3>
      );
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (currentListType && currentListType !== 'ul') flushList();
      currentListType = 'ul';
      currentList.push(trimmed.slice(2));
    } else if (/^\d+\.\s/.test(trimmed)) {
      if (currentListType && currentListType !== 'ol') flushList();
      currentListType = 'ol';
      currentList.push(trimmed.replace(/^\d+\.\s/, ''));
    } else if (trimmed.startsWith('![') && trimmed.includes('](') && trimmed.endsWith(')')) {
      flushList();
      const imageMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imageMatch) {
        const alt = imageMatch[1];
        const src = imageMatch[2];
        elements.push(
          <figure key={`img-${keyCounter++}`} className="my-8">
            <div className="overflow-hidden rounded-3xl shadow-soft border border-gray-100 bg-gray-50">
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
            {alt && (
              <figcaption className="text-center text-xs text-gray-400 mt-2 font-poppins">
                {alt}
              </figcaption>
            )}
          </figure>
        );
      }
    } else if (trimmed.length > 0) {
      flushList();
      elements.push(
        <p key={`p-${keyCounter++}`} className="text-gray-600 mb-6 font-poppins leading-relaxed">
          {renderFormattedText(trimmed)}
        </p>
      );
    }
  }

  flushList();
  flushTable();

  return <div className="prose prose-lg max-w-none">{elements}</div>;
}

