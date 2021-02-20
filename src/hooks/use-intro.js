import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulIntro {
        text {
          raw
        }
        desktopImage: image {
          fluid(maxWidth: 1920, maxHeight: 800, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
          title
        }
        mobileImage: image {
          fluid(maxWidth: 1920, maxHeight: 1200, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
          title
        }
      }
    }
  `);

  return {
    text: data.contentfulIntro.text.raw,
    image: {
      desktopImage: data.contentfulIntro.desktopImage,
      mobileImage: data.contentfulIntro.mobileImage,
    },
  };
};

export default useContentfulIntro;
