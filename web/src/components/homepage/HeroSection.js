import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Блог мам, для малышей</h1>
            <ParagraphText className="hero__text">
              Ничто не заботит маму так, как здоровье её малыша
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Стартовая Блога
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/111.jpg"
              alt="мать и ребёнок1"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
