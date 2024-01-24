import Express from 'express'
import {
  createReservation,
  deleteReservation,
  getReservations,
  updateReservation,
} from '../controller/reservationController.js'

const router = Express.Router()

router.post('/reservation', createReservation)
router.get('/reservation', getReservations)
router.get('/reservation/:id', getReservations)
router.put('/reservation/:id', updateReservation)
router.delete('/reservation/:id', deleteReservation)

export default router
