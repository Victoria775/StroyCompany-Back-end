const express = require('express')
const router = express.Router()
const { User } = require('../../models')
const bcrypt = require('bcryptjs')
const tokenHelper = require('../service/token-helper')

router.post('/registration', async (req, res) => {
  try {
    const { login, password, fio, role } = req.body
    const candidate = await User.findOne({ where: { login } })
    if (candidate) {
      return res
        .status(400)
        .json({ message: 'Пользователь с таким логином уже существует' })
    }

    const hashPasswor = bcrypt.hashSync(password, 6)
    const newUser = await User.create({
      login,
      password: hashPasswor,
      first_name: fio.first_name,
      last_name: fio.last_name,
      full_name: fio.full_name,
      role,
      time_month_work: 0,
      time_month_medical: 0,
      time_month_vacation: 0,
      time_year_work: 0,
      time_year_medical: 0,
      time_year_vacation: 0,
      start_vacation: 0,
      end_vacation: 0,
    })

    const token = tokenHelper.generateAccessToken(newUser.id, newUser.login)

    res.status(201).json({
      token,
      userId: newUser.id,
      login: newUser.login,
      fio: {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        full_name: newUser.full_name,
      },
      role: newUser.role,
      time: {
        current_month: {
          work: newUser.time_month_work,
          medical: newUser.time_month_medical,
          vacation: newUser.time_month_vacation,
        },
        year: {
          work: newUser.time_year_work,
          medical: newUser.time_year_medical,
          vacation: newUser.time_year_vacation,
        },
      },
      vacation: {
        start_vacation: newUser.start_vacation,
        end_vacation: newUser.end_vacation,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: false,
      message: 'Ошибка регистрации :(',
    })
  }
})

module.exports = router
