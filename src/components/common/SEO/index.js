import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultTitle, defaultDescription }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription
      }

      return (
        <>
          <Helmet title={seo.title} htmlAttributes={{ lang: 'en' }}>
            <meta name='description' content={seo.description} />
            {seo.title && <meta property='og:title' content={seo.title} />}
            {seo.description && (
              <meta property='og:description' content={seo.description} />
            )}
            <link
              rel='stylesheet'
              href='https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css'
            />
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

SEO.defaultProps = {
  title: null,
  description: null
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`
