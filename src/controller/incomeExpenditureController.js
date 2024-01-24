import prisma from '../utils/prisma.js'

export const createIncomeExpenditure = async (req, res) => {
  try {
    const incomeExpenditure = await prisma.incomeExpenditure.create({
      data: req.body,
    })
    res.status(201).json(incomeExpenditure)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getIncomeExpenditures = async (req, res) => {
  try {
    const incomeExpenditures = await prisma.incomeExpenditure.findMany()
    res.status(200).json(incomeExpenditures)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getIncomeExpenditureById = async (req, res) => {
  try {
    const { id } = req.params
    const incomeExpenditure = await prisma.incomeExpenditure.findUnique({
      where: { id: Number(id) },
    })
    res.status(200).json(incomeExpenditure)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const updateIncomeExpenditure = async (req, res) => {
  try {
    const { id } = req.params
    const updatedIncomeExpenditure = await prisma.incomeExpenditure.update({
      where: { id: Number(id) },
      data: req.body,
    })
    res.status(200).json(updatedIncomeExpenditure)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const deleteIncomeExpenditure = async (req, res) => {
  try {
    const { id } = req.params
    const deletedIncomeExpenditure = await prisma.incomeExpenditure.delete({
      where: { id: Number(id) },
    })
    res.status(200).json(deletedIncomeExpenditure)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
