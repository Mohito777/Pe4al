import React from 'react';
import {
  SectionTitleStyles,
  TitleStyles,
} from '../../styles/typography/SectionTitleStyles';

export const Title = ({ children, tag, ...props }) => (
  <TitleStyles as={tag} {...props}>
    {children}
  </TitleStyles>
);

export const SectionTitle = ({ children, tag, ...props }) => (
  <SectionTitleStyles as={tag} {...props}>
    {children}
  </SectionTitleStyles>
);
