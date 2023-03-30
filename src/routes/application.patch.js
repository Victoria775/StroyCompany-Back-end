const express = require('express')
const router = express.Router()
const { Application } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.patch('/application/:id', authMiddlewares, async (req, res) => {
  try {
    const applicationId = req.params.id
    const { newInfo } = req.body

    await Application.update(
      {
        date_start: newInfo.date_start,
        date_end: newInfo.date_end,
        status: newInfo.status,
        process: newInfo.process,
      },
      { where: { id: applicationId } }
    )

    res.status(201).json('Заявление успешно обновлено')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Ошибка обновления заявления :(',
    })
  }
})

module.exports = router
