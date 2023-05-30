const express = require('express')
const router = express.Router()
const { User } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.patch('/user/:id', authMiddlewares, async (req, res) => {
  try {
    const userId = req.params.id

    const { newInfo } = req.body

    if (newInfo?.nameFiles) {
      await User.update(
        {
          name_files: newInfo.nameFiles,
        },
        { where: { id: userId } }
      )
    } else {
      const { time, vacation } = newInfo
      await User.update(
        {
          time_month_work: time.time_month_work,
          time_month_medical: time.time_month_medical,
          time_month_vacation: time.time_month_vacation,
          time_year_work: time.time_year_work,
          time_year_medical: time.time_year_medical,
          time_year_vacation: time.time_year_vacation,
          start_vacation: vacation.start_vacation,
          end_vacation: vacation.end_vacation,
        },
        { where: { id: userId } }
      )
    }

    res.status(201).json('Информация пользователя успешно обновлена')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Ошибка обновления информации пользователя :(',
    })
  }
})

module.exports = router
