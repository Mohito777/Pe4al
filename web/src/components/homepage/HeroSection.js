import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import ParagraphText from "../typography/ParagraphText";
import Button from "../buttons/Button";

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className='container'>
        <div className='hero__wrapper'>
          <div className='left'>
            <h1 className='hero__heading'>Блог для мам и их малышей</h1>
            <ParagraphText className='hero__text'>
             Больше всего в жизни, наверное, мам интересует здоровье и счастье своих детей.
            </ParagraphText>
            <Button to='/blogs' tag={Link} className='hero__button'>
              Посмотрите наш блог
            </Button>
          </div>
          <div className='right'>
            <StaticImage
              className='hero__image'
              src='../../images/222.jpg'
              alt='vr guy'
              placeholder='blurred'
              objectPosition='50% 30%'
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
