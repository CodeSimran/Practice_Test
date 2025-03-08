
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import PostList from './component/PostList'
import PostDetail from './component/PostDetails'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/posts" element={<PostList />} />
        
        <Route path="/post/:id" element={<PostDetail />} />
        
      </Routes>
    </Router>
      
    
      </>
  )
}

export default App
