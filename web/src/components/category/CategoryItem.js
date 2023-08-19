import React from 'react';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';

function CategoryItem({ title, decription, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">...</div>
      <Button to={`/categories/${slug.current}`} variant={buttonTypes.outline}>
        Кнопка
      </Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;
