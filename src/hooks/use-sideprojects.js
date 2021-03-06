import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulSideProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulTeaserContainer(
        contentful_id: { eq: "4RqUpWIDFR4k8vHnDhTVoi" }
      ) {
        title
        teasers {
          title
          link
          text {
            raw
          }
          image {
            title
            gatsbyImageData(
              width: 900
              height: 506
            )
          }
        }
      }
    }
  `);

  return {
    title: data.contentfulTeaserContainer.title,
    teasers: data.contentfulTeaserContainer.teasers,
  };
};

export default useContentfulSideProjects;
