import React from 'react';
import useContentEducation from '../hooks/use-education';
import useContentfulIntro from '../hooks/use-intro';
import useContentfulWork from '../hooks/use-work';
import useContentfulProjects from '../hooks/use-projects';
import useContentfulSideProjects from '../hooks/use-sideprojects';
import Intro from './intro';
import Table from './table';
import Projects from './projects';

const Main = () => {
  const introContext = useContentfulIntro();
  const educationContext = useContentEducation();
  const workContext = useContentfulWork();
  const projectsContext = useContentfulProjects();
  const sideProjectsContext = useContentfulSideProjects();

  return (
    <main>
      <Intro text={introContext.text} image={introContext.image} />
      <Table
        targetId="education"
        title={educationContext.title}
        rows={educationContext.rows}
      />
      <Table
        targetId="work"
        title={workContext.title}
        rows={workContext.rows}
      />
      <Projects
        targetId="projects"
        title={projectsContext.title}
        teasers={projectsContext.teasers}
      />
      <Projects
        targetId="sideprojects"
        title={sideProjectsContext.title}
        teasers={sideProjectsContext.teasers}
      />
    </main>
  );
};

export default Main;
