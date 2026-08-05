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

  const renderFormattedText = (text: string) => {
    // Replace **bold** with <strong>
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-dark-base">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

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
        <h2 key={`h2-${keyCounter++}`} className="text-2xl font-bold text-dark-base mt-8 mb-4 font-fredoka">
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
    } else if (trimmed.length > 0) {
      flushList();
      elements.push(
        <p key={`p-${keyCounter++}`} className="text-gray-600 mb-6 font-poppins leading-relaxed">
          {renderFormattedText(trimmed)}
        </p>
      );
    }
  });

  flushList();

  return <div className="prose prose-lg max-w-none">{elements}</div>;
}
