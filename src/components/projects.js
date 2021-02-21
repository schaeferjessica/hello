import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ThemeContext from '../styles/themecontext';
import { moduleSpace } from '../styles/container';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import anime from 'animejs/lib/anime.es.js';
import Img from 'gatsby-image';
import { devices } from '../styles/breakpoints';

// styles
const ProjectsContainer = styled.div`
  ${moduleSpace}

  > h2 {
    margin-bottom: 80px;

    @media ${devices.tablet} {
      margin-bottom: 40px;
    }
  }
`;

const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;

  &:after {
    content: '';
    flex-basis: 28%;
    max-width: 28%;
    height: 0;
  }
`;

const TeaserLink = styled.a`
  color: ${(props) => props.color.foreground};
  text-decoration: none;
`;

const ProjectTeaser = styled.li`
  width: 28%;
  margin-bottom: 80px;

  &:first-child,
  &:nth-child(2) {
    width: 47%;
  }

  &:nth-child(3n -2) {
    margin-top: 40px;
  }

  @media ${devices.tablet} {
    width: 47%;

    &:nth-child(2n) {
      margin-top: 20px;
    }
  }

  @media ${devices.mobile} {
    width: 100%;
    margin-bottom: 40px;

    &:first-child,
    &:nth-child(2) {
      width: 100%;
    }

    &:first-child,
    &:nth-child(3n - 1) {
      margin-top: 0px;
    }
  }
`;

const ImgWrapper = styled.a`
  width: 100%;
  display: block;
  overflow: hidden;

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
`;

const TextWrapper = styled.div`
  margin-top: -40px;
  z-index: 1;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${(props) => props.color.background};
  padding: 10px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }
`;

const ProjectButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Projects = ({ targetId, title, teasers }) => {
  const projectEl = useRef(null);
  const { color } = useContext(ThemeContext);
  const [visible, setVisible] = useState(5);

  function loadMore() {
    setVisible(visible + 6);
  }

  useEffect(() => {
    anime.timeline().add({
      targets: projectEl.current,
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1400,
      delay: 400,
    });
  }, []);

  return (
    <ProjectsContainer className="container" ref={projectEl} id={targetId}>
      <h2>{title}</h2>
      <ProjectList>
        {teasers.slice(0, visible).map((teaser, index) => (
          <ProjectTeaser key={`teaser-${index}`} color={color}>
            <ImgWrapper
              href={teaser.link}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="-1"
            >
              <Img fluid={teaser.image.fluid} alt={teaser.image.title} />
            </ImgWrapper>
            <TextWrapper color={color}>
              <h3>
                <TeaserLink
                  color={color}
                  href={teaser.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teaser.title}
                </TeaserLink>
              </h3>
              {teaser.text
                ? documentToReactComponents(JSON.parse(teaser.text.raw))
                : ''}
            </TextWrapper>
          </ProjectTeaser>
        ))}
      </ProjectList>
      {visible < teasers.length && (
        <ProjectButton>
          <button onClick={loadMore}>more projects</button>
        </ProjectButton>
      )}
    </ProjectsContainer>
  );
};

export default Projects;
