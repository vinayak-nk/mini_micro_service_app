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
  const { type, data } = req.body
  switch (type) {
    case 'PostCreated':
      const { id, title } = data
      posts[id] = { id, title, comments: [] }
      break;
    case 'CommentCreated':
      const { commentId, content, postId } = data
      const post = posts[postId]
      post.comments.push({ commentId, content })
      // posts[postId] = post
      break;
    default:
      break;
  }
  console.log('posts==', JSON.stringify(posts))
  res.send({})
})

const PORT = 4002

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
});
