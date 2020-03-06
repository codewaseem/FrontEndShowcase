import { injectIntl, Link } from "gatsby-plugin-intl";
import React from "react";

const Header = ({ intl }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {intl.formatMessage({ id: "site_title" })}
        </Link>
      </h1>
    </div>
  </header>
);

export default injectIntl(Header);
