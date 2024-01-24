import express from 'express'
import {
  createService,
  deleteService,
  getAllServices,
  getServiceById,
  updateService,
} from '../controller/serviceController.js'

const router = express.Router()

router.post('/service', createService)
router.get('/service', getAllServices)
router.get('/service/:id', getServiceById)
router.put('/service/:id', updateService)
router.delete('/service/:id', deleteService)

export default router
