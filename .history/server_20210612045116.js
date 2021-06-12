import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { saveNewUser } from ''
const app = express()

app.use(express.static('public'))

app.post('/', bodyParser.json(), saveNewUser)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})

