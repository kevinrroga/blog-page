import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  locale?: string;
}

/**
 * SEO component for dynamically setting meta tags on each page
 * Use this component at the top of each page component to provide
 * specific SEO metadata for that page
 */
const SEO = ({
  title = "ELSA Albania | European Law Students' Association",
  description = "A non-political, independent, non-profit organisation run by and for law students and young lawyers.",
  image = "https://elsa-albania.org/assets/elsa-logo-white.png",
  url = "https://elsa-albania.org",
  type = "website",
  locale = "en_US"
}: SEOProps) => {
  const fullTitle = title.includes("ELSA Albania") ? title : `${title} | ELSA Albania`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph Tags */}
      <meta property="og:site_name" content="ELSA Albania" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={locale} />
      {locale !== "en_US" && <meta property="og:locale:alternate" content="en_US" />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;