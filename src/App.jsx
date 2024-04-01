import './App.css'
import React, { useState } from 'react';
import Post from './Post';
import CreatePostForm from './CreatePostForm';
import Feed from './Feed';

function App(){
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return(
  
  <div>
  <h1>Fakebook!</h1>
  
  {/* CreatePostForm */}
  <CreatePostForm onSubmit={handleAddPost} />

  
  {/* Feed */}
  <Feed posts={posts} />
  
  <Post content="This is a test post!" />
  <Post content="This is another test post!" />
  
  </div>
  
  )
  }
  export default App