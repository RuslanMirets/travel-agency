import Link from 'next/link';
import React from 'react';

interface IProps {
  href: string;
}

export const LinkItem: React.FC<IProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};
