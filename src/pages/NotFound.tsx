import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { useMeta } from '../lib/meta';

export const NotFound: React.FC = () => {
  useMeta('Page not found');
  return (
    <PageHeader title="Page" accent="Not Found" intro="The page you're looking for doesn't exist or has moved.">
      <Link className="reg-btn" to="/" style={{ marginTop: 28 }}>Back to Home</Link>
    </PageHeader>
  );
};
