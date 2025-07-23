import { renderToString } from 'vue/server-renderer'
import { createApp, h } from 'vue'
import App from './App.vue'

export { render }

async function render(pageContext) {
  const { Page, pageProps } = pageContext

  const app = createApp({
    render: () => h(App, { Page, pageProps })
  })

  const appHtml = await renderToString(app)

  return {
    documentHtml: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
          <div id="app">${appHtml}</div>
        </body>
      </html>
    `
  }
}
