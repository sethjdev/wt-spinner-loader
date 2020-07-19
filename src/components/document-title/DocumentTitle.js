import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

function DocumentTitle({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

DocumentTitle.propTypes = {
  title: PropTypes.string,
};

export default DocumentTitle;
