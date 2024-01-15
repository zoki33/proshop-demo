import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to ProShop",
  description: "We sell the best products at bargain prices",
  keywords:
    "electronics, buy electronics, cheap phones, sony, playstation, ps5",
};

export default Meta;
