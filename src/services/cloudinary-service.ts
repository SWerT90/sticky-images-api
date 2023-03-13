import cloudinary from 'cloudinary'
import { Readable } from 'stream'

async function uploadImage (file: Express.Multer.File): Promise<string> {
  return await new Promise((resolve, reject) => {
    const cloudinaryUploader = cloudinary.v2.uploader.upload_stream({ folder: 'sticker_images' }, (err, result) => {
      if (result !== null && result !== undefined) {
        resolve(result.url)
      }

      reject(err)
    })

    Readable.from(file.buffer).pipe(cloudinaryUploader)
  })
}

export default {
  uploadImage
}
