import React, { useState } from 'react';

function CreatePostForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePostForm;