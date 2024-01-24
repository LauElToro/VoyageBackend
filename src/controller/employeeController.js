import prisma from '../utils/prisma.js'

export const createEmployee = async (req, res) => {
  try {
    const employee = await prisma.employee.create({
      data: req.body,
    })
    res.status(201).json(employee)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany()
    res.status(200).json(employees)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params
    const employee = await prisma.employee.findUnique({
      where: { id: Number(id) },
    })
    res.status(200).json(employee)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params
    const updatedEmployee = await prisma.employee.update({
      where: { id: Number(id) },
      data: req.body,
    })
    res.status(200).json(updatedEmployee)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params
    const deletedEmployee = await prisma.employee.delete({
      where: { id: Number(id) },
    })
    res.status(200).json(deletedEmployee)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
