import Express from 'express'
import {
  createBasicSalary,
  deleteBasicSalary,
  getBasicSalaries,
  getBasicSalaryById,
  updateBasicSalary,
} from '../controller/basicSalaryController.js'

const router = Express.Router()

router.post('/basicSalary', createBasicSalary)
router.get('/basicSalary', getBasicSalaries)
router.get('/basicSalary/:id', getBasicSalaryById)
router.put('/basicSalary/:id', updateBasicSalary)
router.delete('/basicSalary/:id', deleteBasicSalary)

export default router