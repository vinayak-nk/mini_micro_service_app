import { useState } from 'react'
import axios from "axios";


import './App.css'
const CommentCreate = ({ postId }) => {
  const [content, setComment] = useState('')
  const domain = 'post.com'
  
  const onSubmit = async (event) => {
    event.preventDefault()
    const URL = `http://${domain}/posts/${postId}/comments`
    const body = { content }
    await axios.post(URL, body)

    setComment('')
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label>New content</label>
        <input className='form-control' value={content} onChange={(e) => setComment(e.target.value)} />
      </div>
      <button className='btn btn-primary'>Post content</button>
    </form>
  )
}

export default CommentCreate