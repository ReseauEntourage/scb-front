const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => {
    return app.render(req, res, '/landing', req.query)
  })

  server.get('/a-propos', (req, res) => {
    return app.render(req, res, '/a-propos', req.query)
  })

  server.get('/defis', (req, res) => {
    return app.render(req, res, '/defis', req.query)
  })

  server.get('/defi/:id', (req, res) => {
    return app.render(req, res, '/defi', { id: req.params.id })
  })

  server.get('/parcours', (req, res) => {
    return app.render(req, res, '/parcours', req.query)
  })

  server.get('/parcours/:slug', (req, res) => {
    return app.render(req, res, '/parcour', { slug: req.params.slug })
  })

  server.get('/parcours/:slug/conclusion', (req, res) => {
    return app.render(req, res, '/conclusion', { slug: req.params.slug })
  })

  server.get('/parcours/:slug/:chapitreSlug', (req, res) => {
    return app.render(req, res, '/chapitre', {
      slug: req.params.slug,
      chapitreSlug: req.params.chapitreSlug
    })
  })

  server.get('/parcours/:slug/:chapitreSlug/:articleSlug', (req, res) => {
    return app.render(req, res, '/article', {
      slug: req.params.slug,
      articleSlug: req.params.articleSlug
    })
  })

  server.get('/parcours/:slug/:chapitreSlug/:articleSlug/reponse/:value', (req, res) => {
    return app.render(req, res, '/explanation', {
      slug: req.params.slug,
      articleSlug: req.params.articleSlug,
      value: req.params.value
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
