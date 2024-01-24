import supertest from 'supertest'
import { app, server } from '../src/app.js'
import prisma from '../src/utils/prisma.js'

const api = supertest(app)

const endpoint = '/api/service'

const name = 'Services'

const testString = 'Test'
const testUpdated = 'TestUpdated'

const post = {
  type: testString,
  name: testString,
  price: 1,
  description: testString,
}

const postUpdated = {
  type: testUpdated,
  name: testUpdated,
  price: 2,
  description: testUpdated,
}

let id

// Create
test(`Test create ${name} endpoint`, async () => {
  const response = await api
    .post(endpoint)
    .send(post)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  id = response.body.id
})

// Get all
test(`Test get ${name} endpoint`, async () => {
  await api
    .get(endpoint)
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

// Get by id
test(`Test get ${name} by id endpoint`, async () => {
  await api
    .get(`${endpoint}/${id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

// Update
test(`Test update ${name} endpoint`, async () => {
  await api
    .put(`${endpoint}/${id}`)
    .send(postUpdated)
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

// Delete
test(`Test delete ${name} endpoint`, async () => {
  await api.delete(`${endpoint}/${id}`).expect(200)
})

afterAll(() => {
  server.close()
  prisma.$disconnect()
})
