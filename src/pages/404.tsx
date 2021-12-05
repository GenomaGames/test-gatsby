import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Not found">
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
      </p>
      {process.env.NODE_ENV === "development" ? (
        <p>
          Try creating a page in <code style={codeStyles}>src/pages/</code>.
        </p>
      ) : null}
      <Link to="/">Go home</Link>.
    </Layout>
  );
};

export default NotFoundPage;
