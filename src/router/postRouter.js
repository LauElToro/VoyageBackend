import Express from 'express'
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from '../controller/postController.js'

const router = Express.Router()

router.post('/post', createPost)
router.get('/post', getPosts)
router.get('/post/:id', getPostById)
router.put('/post/:id', updatePost)
router.delete('/post/:id', deletePost)

export default router
