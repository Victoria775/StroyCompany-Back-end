const express = require('express')
const router = express.Router()
const { User } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.get('/users', authMiddlewares, async (req, res) => {
  try {
    const response = await User.findAll()

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Ошибка получения пользователей :(',
    })
  }
})

module.exports = router
