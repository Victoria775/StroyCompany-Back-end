const express = require('express')
const router = express.Router()
const { Message } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.post('/message', authMiddlewares, async (req, res) => {
  try {
    const { userId, senderId, senderFio, text, infoFile, isRead } = req.body

    await Message.create({
      userId,
      senderId,
      sender_first_name: senderFio.first_name,
      sender_last_name: senderFio.last_name,
      sender_full_name: senderFio.full_name,
      text,
      infoFile,
      isRead,
    })

    res.status(201).json('Сообщение успешно отправлено')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Ошибка создания сообщения :(',
    })
  }
})

module.exports = router
