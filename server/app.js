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

  server.get('/parcours/:id', (req, res) => {
    return app.render(req, res, '/index', { id: req.params.id })
  })

  server.get('/parcours/:id/:chapitre/0', (req, res) => {
    return app.render(req, res, '/entete_chapitre', {
      id: req.params.id,
      chapitre: req.params.chapitre
    })
  })

  server.get('/parcours/:id/introduction', (req, res) => {
    return app.render(req, res, '/index', { id: req.params.id })
  })

  server.get('/parcours/:id/quizz/:number', (req, res) => {
    return app.render(req, res, '/quizz', {
      id: req.params.id,
      number: req.params.number
    })
  })

  server.get('/parcours/:id/:chapitre/:order/reponse/:value', (req, res) => {
    return app.render(req, res, '/explanation', {
      id: req.params.id,
      chapitre: req.params.chapitre,
      order: req.params.order,
      value: req.params.value
    })
  })

  server.get(
    '/parcours/:id/quizz/reponse/:validate/:explanation',
    (req, res) => {
      return app.render(req, res, '/about', {
        id: req.params.id,
        validate: req.params.validate,
        explanation: req.params.explanation
      })
    }
  )

  server.get('/parcours/:id/conclusion', (req, res) => {
    return app.render(req, res, '/conclusion', { id: req.params.id })
  })

  server.get('/parcours/:id/:chapitre/:order', (req, res) => {
    return app.render(req, res, '/slide', {
      id: req.params.id,
      chapitre: req.params.chapitre,
      order: req.params.order
    })
  })

  server.get('/defis', (req, res) => {
    return app.render(req, res, '/defis', req.query)
  })

  server.get('/defi/:id', (req, res) => {
    return app.render(req, res, '/defi', { id: req.params.id })
  })

  server.get('/text', (req, res) => {
    return app.render(req, res, '/text', req.query)
  })

  server.get('/parcours', (req, res) => {
    return app.render(req, res, '/parcours', req.query)
  })

  server.get('/a-propos', (req, res) => {
    return app.render(req, res, '/apropos', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
