const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express()

app.use(bodyParser.json());
app.use(cors());

const posts = {}
// posts and comments
app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/events', (req, res) => {
  console.log(`QUERY - Received event: ${req.body.type}`)
  const { type, data } = req.body
  const { commentId, content, postId, status } = data
  const post = posts[postId]
  switch (type) {
    case 'PostCreated':
      const { id, title } = data
      posts[id] = { id, title, comments: [] }
      break;
    case 'CommentCreated':
      post.comments.push({ commentId, content, status })
      break;
    case 'CommentUpdated':
      const comment = post.comments.find(c => c.commentId === commentId)
      comment.status = status
      comment.content = content
      break
    default:
      break;
  }
  res.send({})
})

const PORT = 4002

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
});
