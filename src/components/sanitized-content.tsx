"use client";

import React, { useMemo } from 'react';
import DOMPurify from 'isomorphic-dompurify';

interface SanitizedContentProps {
  html: string;
}

export default function SanitizedContent({ html }: SanitizedContentProps) {
  const sanitizedHtml = useMemo(() => {
    return DOMPurify.sanitize(html);
  }, [html]);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}
