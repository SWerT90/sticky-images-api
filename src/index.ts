import express from 'express'
import colors from 'picocolors'

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(colors.green(`⚡ App listening on port ${port}`))
})
