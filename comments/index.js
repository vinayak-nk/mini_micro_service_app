const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors')
const axios = require('axios');

const app = express()
app.use(bodyParser.json())
app.use(cors())

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  const { id } = req.params
  const comments = commentsByPostId[id] || []
  res.status(200).send(comments)
})

app.post('/posts/:id/comments', async (req, res) => {
  const commentId = randomBytes(4).toString('hex')
  const { id } = req.params
  const { content } = req.body

  const comments = commentsByPostId[id] || []
  comments.push({ commentId, content, status: 'pending' })
  
  commentsByPostId[id] = comments

  await axios.post(`http://localhost:4005/events`, {
    type: 'CommentCreated',
    data: { commentId, content, postId: id, status: 'pending' }
  })


  res.status(201).send(comments);
})

app.post('/events', async(req, res) => {
  console.log(`COMMENTS - Received event: ${req.body.type}`)
  const { type, data } = req.body
  const { commentId, content, postId, status } = data
  if (type === 'CommentModerated') {
    const comments = commentsByPostId[postId] || []
    comments.push({ commentId, content, status: 'pending' })
    const comment = comments.find(c => c.commentId === commentId)
    comment.status = status

    await axios.post(`http://localhost:4005/events`, {
      type: 'CommentUpdated',
      data: { commentId, content, postId, status }
    })

  }
  res.send({})
})

const PORT = 4001
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})