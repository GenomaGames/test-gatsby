import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Genoma Games">
      <p>Independent indie game development studio based on Madrid, Spain.</p>
      <StaticImage alt="Genoma Games logo" src="../images/icon.png" />
    </Layout>
  );
};

export default IndexPage;
