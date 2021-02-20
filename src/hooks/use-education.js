import { graphql, useStaticQuery } from 'gatsby';

export const useContentEducation = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulTable(contentful_id: { eq: "Ne7cefFobts1WfggkaKal" }) {
        title
        rows {
          date
          url
          text {
            raw
          }
          location
        }
      }
    }
  `);

  return {
    title: data.contentfulTable.title,
    rows: data.contentfulTable.rows,
  };
};

export default useContentEducation;
