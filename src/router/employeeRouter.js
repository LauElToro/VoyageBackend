import Express from 'express'
import {
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployees,
  updateEmployee,
} from '../controller/employeeController.js'

const router = Express.Router()

router.post('/employee', createEmployee)
router.get('/employee', getEmployees)
router.get('/employee/:id', getEmployeeById)
router.put('/employee/:id', updateEmployee)
router.delete('/employee/:id', deleteEmployee)

export default router
