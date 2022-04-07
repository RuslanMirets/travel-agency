import Link from 'next/link';
import React from 'react';

interface IProps {
  href: string;
  as?: string;
}

export const LinkItem: React.FC<IProps> = ({ href, as, children }) => {
  return (
    <Link href={href} as={as}>
      <a>{children}</a>
    </Link>
  );
};
