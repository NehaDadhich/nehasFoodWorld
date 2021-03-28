import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
  graphql`
    query {
    site {
      siteMetadata {
      siteUrl
      }
    }
    }
  `,
  );
  return site.siteMetadata.siteUrl;
};

export default useSiteMetadata;