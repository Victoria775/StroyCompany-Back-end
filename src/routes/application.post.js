const express = require('express')
const router = express.Router()
const { Application } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.post('/application', authMiddlewares, async (req, res) => {
  try {
    const { userId, fio, category, date, type, comment, status, process } =
      req.body

    console.log('---------------------------------- ', req.body);

    await Application.create({
      userId,
      first_name: fio.first_name,
      last_name: fio.last_name,
      full_name: fio.full_name,
      category,
      date_start: date.start,
      date_end: date.end,
      type,
      comment,
      status,
      process,
    })

    res.status(201).json('Заявление успешно создано')
  } catch (error) {
    console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr ===== =rr== ====== ', error)
    res.status(400).json({
      success: false,
      message: 'Ошибка создания заявления :(',
    })
  }
})

module.exports = router
