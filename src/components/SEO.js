import { Helmet } from "react-helmet";

function SEO({
  title = "Parakletus Publishing | Empowering Authors",
  description = "AI-powered, affordable, and fast publishing services for African writers, academics, and storytellers.",
  keywords = "publishing, book editing, AI publishing, African authors, Parakletus, Nigeria writers, manuscript editing, ISBN",
  url = "https://parakletus.com.ng",
  image = "/og-image.png",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default SEO;
