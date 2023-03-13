import { RequestHandler, Router } from 'express'
import multer from 'multer'

import stickersController from '@controllers/sticker-controller'

const stickersRouter = Router()

const storage = multer.memoryStorage()
const upload = multer({ storage })

stickersRouter.post(
  '/',
  upload.single('image'),
  stickersController.createSticker as RequestHandler
)

export default stickersRouter
