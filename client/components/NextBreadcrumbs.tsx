import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { LinkItem } from './LinkItem';

interface ICrumbProps {
  text?: any;
  href?: any;
  last?: any;
}

interface INextBreadcrumbsProps {
  getDefaultTextGenerator?: any;
}

const _defaultGetDefaultTextGenerator = (path: any) => path;

export const NextBreadcrumbs: React.FC<INextBreadcrumbsProps> = ({
  getDefaultTextGenerator = _defaultGetDefaultTextGenerator,
}) => {
  const router = useRouter();

  const breadcrumbs = React.useMemo(
    function generateBreadcrumbs() {
      const asPathWithoutQuery = router.asPath.split('?')[0];
      const asPathNestedRoutes = asPathWithoutQuery.split('/').filter((v) => v.length > 0);

      const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
        return { href, text: getDefaultTextGenerator(subpath, href) };
      });

      return [{ href: '/', text: 'Home' }, ...crumblist];
    },
    [router.asPath, getDefaultTextGenerator],
  );

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: '30px' }}>
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </Breadcrumbs>
  );
};

const Crumb: React.FC<ICrumbProps> = ({ text, href, last = false }) => {
  if (last) {
    return (
      <Typography sx={{ textTransform: 'capitalize' }} color="text.primary">
        {text}
      </Typography>
    );
  }

  return (
    <LinkItem href={href}>
      <Typography sx={{ textTransform: 'capitalize' }}>{text}</Typography>
    </LinkItem>
  );
};
