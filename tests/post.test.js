import supertest from 'supertest'
import { app, server } from '../src/app.js'
import prisma from '../src/utils/prisma.js'

const api = supertest(app)

const endpoint = '/api/post'

const name = 'Post'

const testString = 'Test'
const testUpdated = 'TestUpdated'

const post = {
  feedbackType: testString,
  serviceTypi: testString,
  dayVisited: testString,
  name: testString,
  email: testString,
  fMessage: testString,
  rate: testString,
}

const postUpdated = {
  feedbackType: testUpdated,
  serviceTypi: testUpdated,
  dayVisited: testUpdated,
  name: testUpdated,
  email: testUpdated,
  fMessage: testUpdated,
  rate: testUpdated,
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
  await api
    .delete(`${endpoint}/${id}`)
    .expect(200)
})

afterAll(() => {
  server.close()
  prisma.$disconnect()
})
