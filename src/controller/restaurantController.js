import prisma from '../utils/prisma.js'

export const createRestaurant = async (req, res) => {
  try {
    const restaurant = await prisma.restaurant.create({
      data: req.body,
    })
    res.status(201).json(restaurant)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await prisma.restaurant.findMany()
    res.status(200).json(restaurants)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id: Number(id),
      },
    })
    res.status(200).json(restaurant)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params
    const restaurant = await prisma.restaurant.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    })
    res.status(200).json(restaurant)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params
    const deletedRestaurant = await prisma.restaurant.delete({
      where: {
        id: Number(id),
      },
    })
    res.status(200).json(deletedRestaurant)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
