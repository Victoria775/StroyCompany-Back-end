const express = require('express')
const router = express.Router()

const fs = require('fs')
const path = require('path')

router.post('/filedownload', async (req, res) => {
  try {
    const { filePatch } = req.body
    const file = __dirname + '/../../' + filePatch

    res.download(file)
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Ошибка отправки файла :(',
    })
  }
})

module.exports = router
