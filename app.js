const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/health', (req, res) => {
  res.send(true)
})

app.listen(process.env.PORT || 3000)
