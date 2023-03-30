const express = require('express')
const router = express.Router()
const { Task } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.post('/task', authMiddlewares, async (req, res) => {
  try {
    const { text, userId } = req.body

    await Task.create({
      text,
      userId,
    })

    res.status(201).json('Задача успешно добавлена')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Ошибка создания задачи :(',
    })
  }
})

module.exports = router
