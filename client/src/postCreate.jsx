import { useState } from 'react'
import axios from "axios";


import './App.css'
const CommentsCreate = () => {
  const [title, setTitle] = useState('')
  const domain = 'post.com'

  const onSubmit = async (event) => {
    event.preventDefault()
    const URL = `http://${domain}/posts/create`
    const body = { title }
    await axios.post(URL, body)

    setTitle('')
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label>Title</label>
        <input className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default CommentsCreate