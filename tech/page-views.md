---
path: "/making-of-page-views"
title: "Page Views"
date: 2020-12-29T00:00:00.000Z
tags: ["Page Views"]
type: "tech"
---
*Note:* The code can be viewed at <a href="https://github.com/NehaDadhich/nehasFoodWorld" target="_blank" rel="noopener noreferrer" class="link">  Neha's Food World Github</a>.

In this article, I have shared how I have added page views for my recipes and tech articles. For this, I have used Google Analytics. I created a service account with Google Analytics and enabled it on my site. Then I installed the required gatsby plugins as 

```
npm install --save gatsby-plugin-google-analytics
```

```
npm install --save gatsby-plugin-gdpr-cookies
```

Then I added a cookie consent dialog box as

```Javascript{numberLines: true}
<CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: "#BA83C4", padding: 5 }}
        buttonStyle={{
          color: "black",
          fontSize: "13px",
          background: "#2e96d3",
          fontFamily: "lato",
          borderRadius: 3,
          padding: 10,
          marginRight: 60,
        }}
        onAccept={() => {
          Cookies.set('_ga')
          Cookies.set('_gat')
          Cookies.set('_gid')
        }}
      >
        <p className="margin-0">
          To improve your experience, this website uses cookies. By using this website, you accept the privacy policy.
          <br /> Please read the complete
          <Link to="/disclaimer" className="cookie-consent-link"> Privacy and Cookie policy </Link> carefully. 
        </p>
      </CookieConsent>
```
I added a privacy and cookie policy page (in the footer) for vistors reference. To note when the visitor leaves the website by clicking any of the external hyperlinks on this site, I replaced all the ```<a>``` tags with ```<OutboundLink>``` components as 

```Javascript{numberLines: true}
import { OutboundLink } from "gatsby-plugin-google-analytics"
       <OutboundLink href="destination">  Link name </OutboundLink>
```
In the config file, I added my tracking id as below 

```Javascript{numberLines: true}
   resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR-TRACKING-ID",
        head: false
      }
```
I installed dotenv to save my environment variables in the .env file as 
```
npm install --save dotenv
```
In the .env file, I saved the Google Analytics view id, private key and client email as

```
CLIENT_EMAIL=client_email
PRIVATE_KEY="-----BEGIN PRIVATE KEY-----private_key-----END PRIVATE KEY-----\n"
VIEW_ID=view_id
```

I installed a plugin to get the Google Analytics page views as 

```
npm install -save gatsby-source-google-analytics-reporting-api
```

Then I updated the gatsby-config to only include this plugin if the client email, private key and view id is available as

```Javascript{numberLines: true}
const googlePlugins = [];

if (
  process.env.CLIENT_EMAIL &&
  process.env.PRIVATE_KEY &&
  process.env.VIEW_ID
) {
  googlePlugins.push({
    resolve: `gatsby-source-google-analytics-reporting-api`,
    options: {
      email: process.env.CLIENT_EMAIL,
      key: process.env.PRIVATE_KEY.replace(new RegExp('\\\\n', '\g'), '\n'),
      viewId: process.env.VIEW_ID,
      startDate: `2019-09-01`,
    },
  });
}
module.exports = {
  siteMetadata: {
    title: `Neha's Food World`,
    description: `A food website with tech articles.`,
    author: `@nehaDadhich`
  },
  plugins: [
      .
      .
  ].concat(googlePlugins),
};
```

I updated the pageTemplate to get page views for recipes and tech articles. I got the query result in the graphql as

```Javascript{numberLines: true}
export const pageQuery = graphql`
    .
    .
   pageViews(path: {eq: $path}) {
        totalCount
      }
}`
```
and then adding the result to the pageTemplate as 

```Javascript{numberLines: true}
export default ({
     .
     .
    pageViews
  }
}) => (
    <Layout>
      <h5 className="margin-3-b is-black"> 👀 Total views: {pageViews === null ? 0 : pageViews.totalCount} </h5>
    </Layout>
)
     .
     .
```
and in the footer as 

```Javascript{numberLines: true}
const Footer = () => {
    return(
        <footer>
            <StaticQuery 
            query={
                graphql`{
                    pageViews{
                        totalCount
                      }
                    }`
            }
            render={(data) => {
                const totalCount = data.pageViews.totalCount;
                  .
                  .
                <p className="margin-0-b margin-1-t"> This website has <span className="is-pink">{totalCount} </span> views. This website uses Google Analytics to analyse trends and views. Please read the 
                <Link to="/disclaimer" className="link"> disclaimer</Link> carefully.
                </p>
                .
                .
```
That's it then I was able to display the page views for recipes and tech articles.


