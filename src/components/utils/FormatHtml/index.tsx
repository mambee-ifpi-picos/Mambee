import React from 'react';

interface FormatHtmlProps {
  content: string;
  className?: string;
}

const FormatHtml: React.FC<FormatHtmlProps> = ({ content, className = 'format-html' }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

export default FormatHtml;

