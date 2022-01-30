// By John Fredy Marmolejo
// Jan 2022, for tech challenge

'use strict'

const { test } = require('tap')
const build = require('./app')

test('requests the "/bicycle/1" route', async t => {
  const app = build()

  const response = await app.inject({
    method: 'GET',
    url: '/bicycle/1'
  })
  t.equal(response.statusCode, 200, 'returns a status code of 200')
})