import React from 'react';
import { Link } from 'gatsby';
import PageSpace from '../components/PageSpace';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';
import { SectionTitle } from '../components/typography/Title';
import ParagraphText from '../components/typography/ParagraphText';

function NotFoundPage() {
  return (
    <PageSpace>
      <div className="container">
        <NotFoundPageStyles>
          <SectionTitle> 404 </SectionTitle>
          <ParagraphText>
            <br /> <h2> Вернись обратно, друг -></h2>{' '}
            <Link to="/" className="link">
              Главная
            </Link>
          </ParagraphText>
        </NotFoundPageStyles>
      </div>
    </PageSpace>
  );
}

export default NotFoundPage;
