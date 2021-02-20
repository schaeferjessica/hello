import React, { useContext, useEffect, useRef } from 'react';
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

  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const TeaserLink = styled.a`
  color: ${(props) => props.color};
  text-decoration: none;
`;

const ProjectTeaser = styled.li`
  width: 28%;
  margin-bottom: 80px;

  &:nth-child(3n - 1) {
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

const Projects = ({ targetId, title, teasers }) => {
  const projectEl = useRef(null);
  const { color } = useContext(ThemeContext);

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
    <ProjectsContainer
      className="container"
      color={color.foreground}
      ref={projectEl}
      id={targetId}
    >
      <h2>{title}</h2>
      <ProjectList>
        {teasers.map((teaser, index) => (
          <ProjectTeaser key={`teaser-${index}`} color={color.foreground}>
            <ImgWrapper
              href={teaser.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={teaser.image.fluid} alt={teaser.image.title} />
            </ImgWrapper>
            <h3>
              <TeaserLink
                color={color.foreground}
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
          </ProjectTeaser>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;
