import React from "react";
import { Helmet } from "react-helmet";

function DocumentTitle({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default DocumentTitle;
