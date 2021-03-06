import path from 'path'
import React from 'react'

export default {

  getRoutes: async () => {
    return [
      {
        path: `/`,
        template: 'src/pages/HomePage.jsx'
      },
      {
        path: `sobrenosotros`,
        template: 'src/pages/AboutUsPage.jsx'
      },
      {
        path: `habitaciones`,
        template: 'src/pages/RoomsPage.jsx'
      },
      {
        path: `contacto`,
        template: 'src/pages/ContactPage.jsx'
      }]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    [
      require.resolve("react-static-plugin-css-modules"),
      {
        modules: true, // set true by default
        localIdentName: '[path][name]__[local]--[hash:base64:5]', // just an example
        // any other options you wish from css-loader
        // want to use sass? you can track it down in your webpack build and add the loader
        // otherwise open an issue tagging @ScriptedAlchemy. He will enhance the options if required 
      }
    ],
    require.resolve('react-static-plugin-sitemap'),
  ],
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/superpoderoso.css" />
        <link rel="stylesheet" href="css/styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"></link>
      </Head>
      <Body>{children}</Body>
      <script src="js/modernizr-3.5.0.min.js"></script>
      <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
      <script type="text/javascript" src="js/main.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
        integrity="sha512-IsNh5E3eYy3tr/JiX2Yx4vsCujtkhwl7SLqgnwLNgf04Hrt9BT9SXlLlZlWx+OK4ndzAoALhsMNcCmkggjZB1w=="
        crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      <script src="js/slick.min.js"></script>
      <script src="js/gijgo.min.js"></script>
      <script src="https://raw.githubusercontent.com/9bitStudios/barfiller/master/js/jquery.barfiller.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
      {/* <script type="text/javascript" src="js/main2.js" /> */}
      {/* <script type="text/javascript" src="js/main4.js" /> */}
    </Html>
  ),
}
