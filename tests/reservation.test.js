import supertest from 'supertest'
import { app, server } from '../src/app.js'
import prisma from '../src/utils/prisma.js'

const api = supertest(app)

const endpoint = '/api/reservation'

const name = 'Reservations'

const testString = 'Test'
const testUpdated = 'TestUpdated'

const post = {
  name: testString,
  phoneNumber: testString,
  checkIn: testString,
  checkOut: testString,
  noOfRooms: testString,
}

const postUpdated = {
  name: testUpdated,
  phoneNumber: testUpdated,
  checkIn: testUpdated,
  checkOut: testUpdated,
  noOfRooms: testUpdated,
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
