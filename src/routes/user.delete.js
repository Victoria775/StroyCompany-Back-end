const express = require('express')
const router = express.Router()
const { User } = require('../../models')
const authMiddlewares = require('../middlewares/auth.middlewares.js')

router.delete('/user/:id', authMiddlewares, async (req, res) => {
  try {
    const userId = req.params.id

    const user = await User.findOne({
      where: { id: userId },
    })

    if (!user) {
      return res.status(400).json('Пользователь не найден')
    }

    await User.destroy({
      where: {
        id: userId,
      },
    })

    res.status(204).json('Пользователь успешно удалён')
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: false,
      message: 'Ошибка удаления пользователя :(',
    })
  }
})

module.exports = router
