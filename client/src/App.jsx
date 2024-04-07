import './App.css'
import { lazy,Suspense } from 'react'

const PostCreate = lazy(() => import('./postCreate'))
const PostList = lazy(() => import('./postList'));

function App() {
  return (
    <div className='container'>
      <h1>Create Post</h1>
      <Suspense fallback={<p><i>Loading....</i></p>}>
        <PostCreate />
      </Suspense>
      <hr />
      <Suspense fallback={<p><i>Loading posts....</i></p>}>
        <PostList />
      </Suspense>
    </div>
  )
}

export default App
