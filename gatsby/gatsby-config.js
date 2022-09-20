const siteUrl = `https://www.ifm.edu.mx/`


module.exports = {
  siteMetadata: {
    siteUrl,
    title: `Instituto Franco Mexicano`,
    description: `Estamos trabajando para ti`,
    social: {
      twitter: `ifm`,
    },
    author: `ifm`,
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "du1nlqrj",
      "dataset": "production"
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  },
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "G-JQPGCN0XDS",

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },
    },
  },
  "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }]
};