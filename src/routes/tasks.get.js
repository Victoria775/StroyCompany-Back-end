const express = require('express')
const router = express.Router()
const { Task } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.get('/tasks', authMiddlewares, async (req, res) => {
  try {
    const response = await Task.findAll()

    // console.log('response ===================== ', response);

    res.status(200).json(response)
  } catch (error) {
    console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj = ', error);
    res.status(400).json({
      success: false,
      message: 'Ошибка получения всех задач :(',
    })
  }
})

module.exports = router
