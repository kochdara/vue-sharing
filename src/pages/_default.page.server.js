export async function onBeforeRender(pageContext) {
  // This runs on the server before rendering ANY page

  // You can fetch data or prepare props here
  // For example, add a site-wide title:
  return {
    pageContext: {
      pageProps: {
        siteTitle: 'My Vue SSR Site'
      }
    }
  }
}