import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulIntro {
        text {
          raw
        }
        desktopImage: image {
          gatsbyImageData(
           width: 1920
           height: 800
         )
          title
        }
        mobileImage: image {
          gatsbyImageData(
           width: 1920
           height: 1200
         )
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
