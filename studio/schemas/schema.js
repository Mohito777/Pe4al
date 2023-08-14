/* eslint-disable */
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
/* eslint-enable */

// Импорт кастомных Документов
import blog from './documents/blog';
import author from './documents/author';
import category from './documents/category';
import featured from './documents/featured';

// Импорт кастомных обЪектов
import customImage from './objects/customImage';
import richText from './objects/richText';
import customCode from './objects/customCode';
import normalText from './objects/normalText';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // документы
    blog,
    author,
    category,
    featured,

    // обьекты
    customImage,
    richText,
    customCode,
    normalText,
  ]),
});
