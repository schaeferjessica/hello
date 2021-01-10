import React, { useContext, useEffect, useRef } from 'react';
import Link from './base/link';
import styled from 'styled-components';
import ThemeContext from '../styles/themecontext';
import { devices } from '../styles/breakpoints';
import { moduleSpace } from '../styles/container';
import { colorTransition } from '../styles/color';
import { footerLinks } from '../../static/data/data';
import anime from 'animejs/lib/anime.es.js';

// styles
const ProjectsEl = styled.div`
width: 100%;
  padding-right: 0;
  padding-left: 0;
  ${moduleSpace}

  > h2 {
    white-space: nowrap;
    font-size: 16px;
    padding-left: 30px;
    padding-bottom: 20px;
    font-weight: 500;
    color: ${(props) => props.color};
    ${colorTransition}

    @media ${devices.mobile} {
      padding-left: 20px;
    }
  }
`;
const Ul = styled.ul`
  list-style: none;
  margin-bottom: 20px;
`;
const Li = styled.li`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border-top: 1px solid #10287F;
  transition: border 0.6s ease-in-out;

  @media ${devices.mobile} {
    padding-right: 20px;
    padding-left: 20px;
  }

  a {
    padding: 5px;
    display: inline-block;
    
    @media ${devices.mobile} {
      padding: 0;
    }

    &:focus-visible {
      outline: 1px solid ${(props) => props.color};
    }
  }
`;

const Projects = () => {
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
    <ProjectsEl className="container" color={color.foreground} ref={projectEl}>
      <h2>Projects I worked on:</h2>
      <Ul>
          {footerLinks.map((link) => (
            <Li key={link.link} color={color.foreground}>
              <Link link={link.link} linkText={link.linkText} />
            </Li>
          ))}
        </Ul>
    </ProjectsEl>
  );
};

export default Projects;
