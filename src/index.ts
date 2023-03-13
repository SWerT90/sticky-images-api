import express from 'express'
import colors from 'picocolors'

import config from '@config/config'
import stickersRouter from '@routes/sticker-routes'

const app = express()
const PORT = config.PORT ?? '3000'

app.use(express.json())

app.use('/api/v1/stickers', stickersRouter)

app.listen(PORT, () => {
  console.log(colors.green(`⚡ App listening on port ${PORT}`))
})
