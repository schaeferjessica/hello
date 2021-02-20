import React, { useContext, useEffect, useRef } from 'react';
import ThemeContext from '../styles/themecontext';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import anime from 'animejs/lib/anime.es.js';

const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: opacity 500ms ease 0s, transform 0.5s linear !important;
    object-fit: contain;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media ${devices.tablet} {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const TextWrapper = styled.div`
  width: 80%;
  color: #0c3c87;
  background-color: #f8f5ec;
  margin-top: -80px;
  z-index: 1;
  padding: 40px;
  text-align: center;

  @media ${devices.tablet} {
    width: 93%;
    padding: 20px;
  }

  @media ${devices.mobile} {
    padding: 10px;
  }

  a {
    color: ${(props) => props.color};
  }
`;

const Intro = ({ text, image }) => {
  const { color } = useContext(ThemeContext);
  const textRef = useRef(null);
  const introRef = useRef(null);

  const jumpTo = (hash) => {
    const target = document.querySelector(hash);
    const rect = target.getBoundingClientRect();

    window.scrollTo({
      top: rect.top,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (textRef.current) {
      const jumpmarks = [...textRef.current.querySelectorAll('a[href^="#"]')];
      if (jumpmarks.length) {
        jumpmarks.forEach((link) => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            jumpTo(link.hash);
          });
        });
      }
    }

    anime.timeline().add({
      targets: introRef.current,
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1400,
      delay: 500,
    });
  }, []);

  return (
    <IntroContainer ref={introRef}>
      {image ? (
        <ImageWrapper>
          <Img fluid={image.fluid} alt={image.title} />
        </ImageWrapper>
      ) : (
        ''
      )}
      <TextWrapper color={color.foreground} ref={textRef}>
        {documentToReactComponents(JSON.parse(text))}
      </TextWrapper>
    </IntroContainer>
  );
};

export default Intro;
