const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express()
app.use(bodyParser.json())

app.post('/events', async(req, res) => {
  console.log(`MODERATION - Received event: ${req.body.type}`)
  const { type, data } = req.body
  if (type === 'CommentCreated') {
    const status = data.content.includes('red') ? 'rejected' : 'approved'

    await axios.post(`http://event-bus-srv:4005/events`, {
        type: 'CommentModerated',
        data: {
          ...data, status,
        }
      }
    )
  }
  res.send({})
})

const PORT = 4003
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})