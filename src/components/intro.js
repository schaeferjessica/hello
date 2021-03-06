import React, { useContext, useEffect, useRef } from 'react';
import ThemeContext from '../styles/themecontext';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import anime from 'animejs/lib/anime.es.js';
import aniScroll from '../ani-scroll';

const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  width: 100%;

  img {
    transform: scale(1);
    transition: opacity 500ms ease 0s, transform 0.5s linear !important;

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
  background-color: ${(props) => props.color.background};
  margin-top: -80px;
  z-index: 1;
  padding: 40px;
  color: ${(props) => props.color.foreground};

  @media ${devices.tablet} {
    width: 93%;
    padding: 20px;
  }

  @media ${devices.mobile} {
    padding: 10px;
  }
`;

const Intro = ({ text, image }) => {
  const { color } = useContext(ThemeContext);
  const textRef = useRef(null);
  const introRef = useRef(null);
  const sources = withArtDirection(getImage(image.desktopImage), [
    {
      media: "(max-width: 768px)",
      image: getImage(image.mobileImage),
    },
  ])
  const altTag = image.desktopImage.title;

  const jumpTo = (hash) => {
    const target = document.querySelector(hash);
    const rect = target.getBoundingClientRect();

    aniScroll(rect.top, 400, 'linear');
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
          <GatsbyImage image={sources} alt={altTag} layout="fullWidth" />
        </ImageWrapper>
      ) : (
        ''
      )}
      <TextWrapper color={color} ref={textRef}>
        {documentToReactComponents(JSON.parse(text))}
      </TextWrapper>
    </IntroContainer>
  );
};

export default Intro;
