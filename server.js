// server.js
import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createServer as createViteServer } from 'vite'
import { renderToString } from 'vue/server-renderer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isProd = process.env.NODE_ENV === 'production'
const resolve = (p) => path.resolve(__dirname, p)

async function createServer() {
  const app = express()

  let vite
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: 'ssr' }
    })
    app.use(vite.middlewares)
  } else {
    app.use('/assets', express.static(resolve('dist/client/assets')))
  }

  app.use('*', async (req, res) => {
    const url = req.originalUrl

    try {
      let template, render

      if (!isProd) {
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        const entry = await vite.ssrLoadModule('/src/entry-server.js')
        render = entry.render
      } else {
        template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
        const entry = await import('./dist/server/entry-server.js')
        render = entry.render
      }

      const { app: vueApp, head } = await render(url)

      const appHtml = await renderToString(vueApp)
      // For newer @vueuse/head versions:
      const headHtml = typeof head.renderHeadToString === 'function' 
        ? head.renderHeadToString()
        : head.headTags || ''

      const html = template
        .replace(`<!--app-head-->`, headHtml)
        .replace(`<!--app-html-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      console.error(e)
      res.status(500).end('Internal Server Error')
    }
  })

  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
  })
}

createServer()
