import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulIntro {
        text {
          raw
        }
        image {
          fluid(maxWidth: 1920, maxHeight: 800, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
          title
        }
      }
    }
  `);

  return {
    text: data.contentfulIntro.text.raw,
    image: data.contentfulIntro.image,
  };
};

export default useContentfulIntro;
