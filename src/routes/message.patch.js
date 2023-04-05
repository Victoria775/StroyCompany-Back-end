const express = require('express')
const router = express.Router()
const { Message } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.patch('/message/', authMiddlewares, async (req, res) => {
  try {
    const { messages } = req.body

    if (messages.length > 0) {
      messages.forEach(async (oneMessage) => {
        await Message.update(
          {
            isRead: oneMessage.isRead,
          },
          { where: { id: oneMessage.id } }
        )
      })
    }

    res.status(201).json('Сообщения успешно обновлены')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Ошибка обновления сообщений пользователя :(',
    })
  }
})

module.exports = router
