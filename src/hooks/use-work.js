import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulWork = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulTable(contentful_id: { eq: "7yTyD6B400DxPgI2VBaDXt" }) {
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

export default useContentfulWork;
