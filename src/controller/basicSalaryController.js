import prisma from '../utils/prisma.js'

export const createBasicSalary = async (req, res) => {
  try {
    const basicSalary = await prisma.basicSalary.create({
      data: req.body,
    })
    res.status(201).json(basicSalary)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getBasicSalaries = async (req, res) => {
  try {
    const basicSalaries = await prisma.basicSalary.findMany()
    res.status(200).json(basicSalaries)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getBasicSalaryById = async (req, res) => {
  try {
    const { id } = req.params
    const basicSalary = await prisma.basicSalary.findUnique({
      where: { id: Number(id) },
    })
    res.status(200).json(basicSalary)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const updateBasicSalary = async (req, res) => {
  try {
    const { id } = req.params
    const updatedBasicSalary = await prisma.basicSalary.update({
      where: { id: Number(id) },
      data: req.body,
    })
    res.status(200).json(updatedBasicSalary)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const deleteBasicSalary = async (req, res) => {
  try {
    const { id } = req.params
    const deletedBasicSalary = await prisma.basicSalary.delete({
      where: { id: Number(id) },
    })
    res.status(200).json(deletedBasicSalary)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
