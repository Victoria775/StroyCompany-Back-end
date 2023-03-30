const express = require('express')
const router = express.Router()
const { Application } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.get('/applications', authMiddlewares, async (req, res) => {
  try {
    const response = await Application.findAll()

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Ошибка получения заявлений :(',
    })
  }
})

module.exports = router
