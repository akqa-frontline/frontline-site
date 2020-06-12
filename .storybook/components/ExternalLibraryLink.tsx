import React from 'react';

export interface ExternalLibraryReferenceProps {
  title: string;
  href: string;
}

const ExternalLibraryLink: React.FunctionComponent<ExternalLibraryReferenceProps> = ({
  title,
  href,
}) => (
  <a href={href} target="_blank" rel="noopener nofollow">
    {title}
  </a>
);

export default ExternalLibraryLink;
