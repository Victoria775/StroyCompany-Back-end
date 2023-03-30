const express = require('express')
const router = express.Router()
const { Task } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.delete('/task/:id', authMiddlewares, async (req, res) => {
  try {
    const taskId = req.params.id

    const thisTask = await Task.findOne({
      where: { id: taskId },
    })

    if (!thisTask) {
      return res.status(400).json('Задача не найдена')
    }

    await Task.destroy({
      where: { id: taskId },
    })

    res.status(204).json('Задача успешно удалена')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Ошибка удаления задачи :(',
    })
  }
})

module.exports = router
