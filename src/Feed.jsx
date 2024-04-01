import React from 'react';
import Post from './Post';

function Feed({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="post">
        <Post key={index} title={post.title} content={post.content} />
        </div>
      ))}
    </div>
  );
}

export default Feed;