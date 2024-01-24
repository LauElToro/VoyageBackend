import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import session from 'express-session'
import { PrismaClient } from '@prisma/client'
import { PrismaSessionStore } from '@quixo3/prisma-session-store'
import basicSalaryRouter from './router/basicSalaryRouter.js'
import employeeRouter from './router/employeeRouter.js'
import incomeExpenditureRouter from './router/incomeExpenditureRouter.js'
import postRouter from './router/postRouter.js'
import reservationRouter from './router/reservationRouter.js'
import requestRouter from './router/requestRouter.js'
import restaurantRouter from './router/restaurantRouter.js'
import serviceRouter from './router/serviceRouter.js'
import supplierRouter from './router/supplierRouter.js'
import pdfRouter from './router/pdfRouter.js'

const app = express()
const port = process.env.PORT || 3000
const api = '/api'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('common'))

app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
)

// Routes
app.use('/documentation', express.static('public/documentation'))

// Pdf
app.use('/api', pdfRouter)

// Endpoints
app.use(api, basicSalaryRouter)
app.use(api, employeeRouter)
app.use(api, incomeExpenditureRouter)
app.use(api, postRouter)
app.use(api, reservationRouter)
app.use(api, requestRouter)
app.use(api, restaurantRouter)
app.use(api, serviceRouter)
app.use(api, supplierRouter)

// Server
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

export { app, server }
