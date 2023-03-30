const express = require('express')
const router = express.Router()
const { Application } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.delete('/application/:id', authMiddlewares, async (req, res) => {
  try {
    const applicationId = req.params.id

    const thisApplication = await Application.findOne({
      where: { id: applicationId },
    })

    if (!thisApplication) {
      return res.status(400).json('Заявление не найдено')
    }

    await Application.destroy({
      where: { id: applicationId },
    })

    res.status(204).json('Заявление успешно удалено')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Ошибка удаления заявления :(',
    })
  }
})

module.exports = router
