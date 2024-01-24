import Express from 'express'
import {
  createIncomeExpenditure,
  deleteIncomeExpenditure,
  getIncomeExpenditureById,
  getIncomeExpenditures,
  updateIncomeExpenditure,
} from '../controller/incomeExpenditureController.js'

const router = Express.Router()

router.post('/income_expenditure', createIncomeExpenditure)
router.get('/income_expenditure', getIncomeExpenditures)
router.get('/income_expenditure/:id', getIncomeExpenditureById)
router.put('/income_expenditure/:id', updateIncomeExpenditure)
router.delete('/income_expenditure/:id', deleteIncomeExpenditure)

export default router
