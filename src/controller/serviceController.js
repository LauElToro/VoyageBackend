import prisma from '../utils/prisma.js'

export const createService = async (req, res) => {
  try {
    const service = await prisma.service.create({
      data: req.body,
    })
    res.status(201).json(service)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getAllServices = async (req, res) => {
  try {
    const services = await prisma.service.findMany()
    res.status(200).json(services)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getServiceById = async (req, res) => {
  try {
    const { id } = req.params
    const service = await prisma.service.findUnique({
      where: {
        id: Number(id),
      },
    })
    res.status(200).json(service)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const updateService = async (req, res) => {
  try {
    const { id } = req.params
    const service = await prisma.service.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    })
    res.status(200).json(service)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const deleteService = async (req, res) => {
  try {
    const { id } = req.params
    const deletedService = await prisma.service.delete({
      where: {
        id: Number(id),
      },
    })
    res.status(200).json(deletedService)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
