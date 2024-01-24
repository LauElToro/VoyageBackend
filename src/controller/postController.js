import prisma from '../utils/prisma.js'

export const createPost = async (req, res) => {
  try {
    const post = await prisma.post.create({
      data: req.body,
    })
    res.status(201).json(post)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params
    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
    })
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const updatedPost = await prisma.post.update({
      where: { id: Number(id) },
      data: req.body,
    })
    res.status(200).json(updatedPost)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deletedPost = await prisma.post.delete({
      where: { id: Number(id) },
    })
    res.status(200).json(deletedPost)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
