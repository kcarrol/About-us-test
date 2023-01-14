import path from "path";
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "bgUXyh7oWsFgvDc3tgqYUZ",
        token: "Gm9Ty34dlBAiYKjUEOAuPLRgQ4twq3BxCZgu8yvk3J4DGT8VSisvMPNch4A9VXGB6mznUl0QMCZO2nTCRfP3w",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: path.resolve("./src/templates/defaultPlasmicPage.tsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}

export default config
