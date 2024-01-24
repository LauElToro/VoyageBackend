import supertest from 'supertest'
import { app, server } from '../src/app.js'
import prisma from '../src/utils/prisma.js'

const api = supertest(app)

const endpoint = '/api/restaurant'

const name = 'Restaurant'

const testString = 'Test'
const testUpdated = 'TestUpdated'

const post = {
  menue: testString,
  name: testString,
  address: testString,
  mobile: testString,
  date: testString,
  aguest: testString,
  cguest: testString,
  notes: testString,
  cardName: testString,
  cno: testString,
  expdate: testString,
  cvv: testString,
}

const postUpdated = {
  menue: testUpdated,
  name: testUpdated,
  address: testUpdated,
  mobile: testUpdated,
  date: testUpdated,
  aguest: testUpdated,
  cguest: testUpdated,
  notes: testUpdated,
  cardName: testUpdated,
  cno: testUpdated,
  expdate: testUpdated,
  cvv: testUpdated,
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
