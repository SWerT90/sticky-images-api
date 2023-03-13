import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import cloudinaryService from '@services/cloudinary-service'

async function createSticker (req: Request, res: Response): Promise<void> {
  const { file: image } = req
  if (image === null || image === undefined) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .end()

    return
  }

  const stickerUrl = await cloudinaryService.uploadImage(image)

  res
    .status(StatusCodes.CREATED)
    .json({ stickerUrl })
}

export default {
  createSticker
}
