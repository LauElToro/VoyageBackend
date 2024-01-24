import prisma from '../utils/prisma.js'

export const createRequest = async (req, res) => {
  try {
    const request = await prisma.request.create({
      data: req.body,
    })
    res.status(201).json(request)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getAllRequests = async (req, res) => {
  try {
    const requests = await prisma.request.findMany()
    res.status(200).json(requests)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getRequestById = async (req, res) => {
  try {
    const { id } = req.params
    const request = await prisma.request.findUnique({
      where: {
        id: Number(id),
      },
    })
    res.status(200).json(request)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const updateRequest = async (req, res) => {
  try {
    const { id } = req.params
    const request = await prisma.request.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    })
    res.status(200).json(request)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const deleteRequest = async (req, res) => {
  try {
    const { id } = req.params
    const deletedRequest = await prisma.request.delete({
      where: {
        id: Number(id),
      },
    })
    res.status(200).json(deletedRequest)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
