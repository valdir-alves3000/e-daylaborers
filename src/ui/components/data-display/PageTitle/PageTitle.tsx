import React from 'react';
import { PageTitleContainer, PageTitleStyled } from './PageTitle.style';

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, children }) => {
  return (
    <div>
      <PageTitleContainer>
        <PageTitleStyled>
          {title}
        </PageTitleStyled>
        {subtitle}
      </PageTitleContainer>
    </div>
  );
}

export default PageTitle;