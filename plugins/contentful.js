const Contentful = require('contentful')
export const contentful = Contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '7ztaa0szpfa0',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_TOKEN,
})
