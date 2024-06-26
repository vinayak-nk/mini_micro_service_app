import { useState, useEffect } from 'react'
import axios from "axios";
import CommentCreate from './commentsCreate';
import CommentsList from './commentsList';

function PostList() {
  const [posts, setPosts] = useState([])
  
  const fetchPosts = async () => {
    const URL = 'http://localhost:4000/posts'
    try {
      const response = await axios.get(URL);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div className='d-flex flex-row flex-wrap justify-content-between'>
        {Object.keys(posts).map(key => (
          <div className='card' style={{ width: '30%', marginBottom: '20px' }} key={key}>
            <div className="card-body">
              <h3>{posts[key].title}</h3>
              <CommentsList postId={key} />
              <CommentCreate postId={key} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList