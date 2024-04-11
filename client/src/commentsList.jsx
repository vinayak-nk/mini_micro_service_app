// import { useState, useEffect, useCallback } from 'react'
// import axios from "axios";

function CommentsList({ comments }) {
  const renderComments = comments.map((comment) => {
    let commentContent = ''
    const { status, commentId, content } = comment
    if (status === 'approved') commentContent = content
    if (status === 'pending') commentContent = 'Status: Awaiting moderation...'
    if (status === 'rejected') commentContent = 'Status: Rejected'

    return <li key={commentId} >{commentContent}</li>
  })

  return (
    <div>
      <h5>Comments</h5>
      <ul>{renderComments}</ul>
    </div>
  )
}

export default CommentsList