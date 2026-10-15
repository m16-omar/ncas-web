import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  accent?: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}

// Banner at the top of every inner page, in the same style as the home hero.
export const PageHeader: React.FC<PageHeaderProps> = ({ title, accent, intro, children }) => (
  <header className="page-head always-dark">
    <div className="cover-bg" aria-hidden="true" />
    <div className="grid-lines" aria-hidden="true" />
    <div className="wrap">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span aria-current="page">{accent ? `${title} ${accent}` : title}</span>
      </nav>
      <h1 className="title">
        {title} {accent && <span>{accent}</span>}
      </h1>
      {intro && <p className="title-des">{intro}</p>}
      {children}
    </div>
  </header>
);
