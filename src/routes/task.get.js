const express = require('express')
const router = express.Router()
const { Task } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.get('/tasksuser', authMiddlewares, async (req, res) => {
  try {
    const userId = res.locals.user.userId
    const response = await Task.findAll({
      where: { userId: userId },
    })

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Ошибка получения задач :(',
    })
  }
})

module.exports = router
