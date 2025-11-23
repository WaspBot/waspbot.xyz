"use client";

import React, { useState, useEffect } from 'react';

interface SanitizedContentProps {
  html: string;
}

export default function SanitizedContent({ html }: SanitizedContentProps) {
  const [sanitizedHtml, setSanitizedHtml] = useState('');

  useEffect(() => {
    const loadDOMPurify = async () => {
      if (typeof window !== 'undefined') {
        const DOMPurify = (await import('isomorphic-dompurify')).default;
        setSanitizedHtml(DOMPurify.sanitize(html));
      }
    };
    loadDOMPurify();
  }, [html]);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}
