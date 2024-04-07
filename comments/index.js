const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  const { id } = req.params
  const comments = commentsByPostId[id] || []
  res.status(200).send(comments)
})

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex')
  const { id } = req.params
  const { content } = req.body

  const comments = commentsByPostId[id] || []
  comments.push({ commentId, content })
  
  commentsByPostId[id] = comments

  res.status(201).send(comments);
})

const PORT = 4001
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})