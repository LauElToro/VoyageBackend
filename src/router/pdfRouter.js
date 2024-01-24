import express from 'express'
import { createPdf, reciptPdf } from '../controller/pdfController.js'

const router = express.Router()

router.post('/create-pdf', createPdf)
router.get('/recipt-pdf', reciptPdf)

export default router