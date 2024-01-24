import prisma from '../utils/prisma.js'

export const createSupplier = async (req, res) => {
  try {
    const supplier = await prisma.supplier.create({
      data: req.body,
    })
    res.status(201).json(supplier)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await prisma.supplier.findMany()
    res.status(200).json(suppliers)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getSupplierById = async (req, res) => {
  try {
    const { id } = req.params
    const supplier = await prisma.supplier.findUnique({
      where: {
        id: Number(id),
      },
    })
    res.status(200).json(supplier)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const updateSupplier = async (req, res) => {
  try {
    const { id } = req.params
    const supplier = await prisma.supplier.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    })
    res.status(200).json(supplier)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const deleteSupplier = async (req, res) => {
  try {
    const { id } = req.params
    const deletedSupplier = await prisma.supplier.delete({
      where: {
        id: Number(id),
      },
    })
    res.status(200).json(deletedSupplier)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
