import { useState, useEffect, useCallback } from 'react'
import axios from "axios";

function CommentsList({ postId }) {
  const [comments, setComments] = useState([])
  
  const fetchComments = useCallback(async () => {
    const URL = `http://localhost:4001/posts/${postId}/comments`
    try {
      const response = await axios.get(URL);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }, [postId])

  useEffect(() => {
    fetchComments()
  }, [fetchComments]);

  return (
    <div>
      <h5>Comments</h5>
      <ul>
        {comments.map((comment) => <li key={comment.commentId}>{comment.content}</li>)}
      </ul>
    </div>
  )
}

export default CommentsList