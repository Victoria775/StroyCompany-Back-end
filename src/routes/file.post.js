const express = require('express')
const router = express.Router()
// const authMiddlewares = require('../middlewares/auth.middlewares.js')
// const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })

router.post('/file', async (req, res) => {
  try {
    if (!req.files) return res.status(400).json('Не удалось загрузить файл')

    const file = req.files.file

    if (!file) return res.status(400).json('Некорректное имя файла')

    const newFileName = encodeURI(Date.now() + '-' + file.name)

    file.mv(`${__dirname}/../../uploads/${newFileName}`, (err) => {
      if (err) {
        console.error(err)
        return res.status(500).json(`${err}`)
      }
      res
        .status(201)
        .json({ fileName: file.name, filePatch: `/uploads/${newFileName}` })
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Ошибка отправки файла :(',
    })
  }
})

// router.post('/file', upload.single('files'), async (req, res) => {
//   try {
//     // const { file } = req.body

//     console.log(
//       'req =============================================================== ',
//       req.files
//     )

//     res.status(201).json('Файл успешно отправлен')
//   } catch (error) {
//     console.log(error)
//     res.status(400).json({
//       success: false,
//       message: 'Ошибка создания сообщения :(',
//     })
//   }
// })

module.exports = router
