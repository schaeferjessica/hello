import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulTeaserContainer(
        contentful_id: { eq: "45ZJF24ly7al0QPWLnDHSt" }
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
            fluid(maxWidth: 900, maxHeight: 506, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
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

export default useContentfulProjects;
