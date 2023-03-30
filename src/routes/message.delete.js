const express = require('express')
const router = express.Router()
const { Message } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.delete('/message/:id', authMiddlewares, async (req, res) => {
  try {
    const messageId = req.params.id

    const thisMessage = await Message.findOne({
      where: { id: messageId },
    })

    if (!thisMessage) {
      return res.status(400).json('Сообщение не найдено')
    }

    await Message.destroy({
      where: { id: messageId },
    })

    res.status(204).json('Сообщение успешно удалено')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Ошибка удаления сообщения :(',
    })
  }
})

module.exports = router
