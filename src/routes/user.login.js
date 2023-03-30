const express = require('express')
const router = express.Router()
const { User } = require('../../models')
const bcrypt = require('bcryptjs')
const tokenHelper = require('../service/token-helper')

router.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body
    const user = await User.findOne({ where: { login } })
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' })
    }

    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) {
      return res.status(401).json({ message: 'Неверный пароль' })
    }

    const token = tokenHelper.generateAccessToken(user.id, user.login)

    res.status(200).json({
      token,
      userId: user.id,
      login: user.login,
      fio: {
        first_name: user.first_name,
        last_name: user.last_name,
        full_name: user.full_name,
      },
      role: user.role,
      time: {
        current_month: {
          work: user.time_month_work,
          medical: user.time_month_medical,
          vacation: user.time_month_vacation,
        },
        year: {
          work: user.time_year_work,
          medical: user.time_year_medical,
          vacation: user.time_year_vacation,
        },
      },
      vacation: {
        start_vacation: user.start_vacation,
        end_vacation: user.end_vacation,
      },
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Ошибка входа :(',
    })
  }
})

module.exports = router
