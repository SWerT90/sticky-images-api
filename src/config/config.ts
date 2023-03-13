import dotenv from 'dotenv'

const { NODE_ENV } = process.env

if (NODE_ENV === 'development') {
  dotenv.config()
}

const { PORT } = process.env

export default {
  PORT
}
