import prisma from '../utils/prisma.js'

export const createReservation = async (req, res) => {
  try {
    const reservation = await prisma.reservation.create({
      data: req.body,
    })
    res.status(201).json(reservation)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getReservations = async (req, res) => {
  try {
    const reservations = await prisma.reservation.findMany()
    res.status(200).json(reservations)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getReservationById = async (req, res) => {
  try {
    const { id } = req.params
    const reservation = await prisma.reservation.findUnique({
      where: { id: Number(id) },
    })
    res.status(200).json(reservation)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const updateReservation = async (req, res) => {
  try {
    const { id } = req.params
    const updatedReservation = await prisma.reservation.update({
      where: { id: Number(id) },
      data: req.body,
    })
    res.status(200).json(updatedReservation)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params
    const deletedReservation = await prisma.reservation.delete({
      where: { id: Number(id) },
    })
    res.status(200).json(deletedReservation)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
