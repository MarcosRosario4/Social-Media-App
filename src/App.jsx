import './App.css'
import React, {useState } from 'react';
import Post from './Post';
import CreatePostForm from './CreatePostForm';
import Feed from './Feed';

function App(){
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return(
  
  <div>
  <h1>Fakebook!</h1>
  <CreatePostForm onSubmit={handleCreatePost} />
  <Feed posts={posts} />
  {/* CreatePostForm */}
  
  {/* Feed */}
  
  
  
  </div>
  
  )
  }
  export default App