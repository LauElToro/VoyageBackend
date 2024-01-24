import express from 'express'
import {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
} from '../controller/restaurantController.js'

const router = express.Router()

router.post('/restaurant', createRestaurant)
router.get('/restaurant', getAllRestaurants)
router.get('/restaurant/:id', getRestaurantById)
router.put('/restaurant/:id', updateRestaurant)
router.delete('/restaurant/:id', deleteRestaurant)

export default router
