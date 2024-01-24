import puppeteer from 'puppeteer'
import pdfTemplate from '../utils/pdfTemplate.js'

const pdfLocation = 'public/pdf/'
const pdfName = 'result.pdf'

export const createPdf = async (req, res) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setContent(pdfTemplate(req.body))

  await page.pdf({
    path: `${pdfLocation}${pdfName}`,
    format: 'A4',
  })

  await browser.close()
}

export const reciptPdf = (req, res) => {
  res.sendFile('result.pdf', { root: pdfLocation })
}
