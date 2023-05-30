const express = require('express')
const router = express.Router()
const { User } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')
const bcrypt = require('bcryptjs')

router.post('/user', authMiddlewares, async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      fullName,
      role,
      userPosition,
      phone,
      mail,
      login,
      password,
      nameFiles,
    } = req.body

    const candidate = await User.findOne({ where: { login } })
    if (candidate) {
      return res
        .status(400)
        .json({ message: 'Пользователь с таким логином уже существует' })
    }

    const hashPasswor = bcrypt.hashSync(password, 6)

    await User.create({
      login,
      password: hashPasswor,
      first_name: firstName,
      last_name: lastName,
      full_name: fullName,
      role,
      user_position: userPosition,
      phone,
      mail,
      name_files: nameFiles,
      time_month_work: 0,
      time_month_medical: 0,
      time_month_vacation: 0,
      time_year_work: 0,
      time_year_medical: 0,
      time_year_vacation: 0,
      start_vacation: 0,
      end_vacation: 0,
    })

    res.status(201).json('Пользователь успешно создан')
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Ошибка при создании сотрудника :(',
    })
  }
})

module.exports = router
