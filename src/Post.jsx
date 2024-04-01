import React, { useState } from 'react';
import Comment from './Comment';

function Post(props){

    const [likes, setLikes] = useState(0);

    function handleLike(){
        setLikes(likes + 1);
    }

  return(

    <div>
        <h2>{props.title}</h2>
        <h3>{props.content}</h3>
        <p>Likes: {likes}</p>
        <button onClick={handleLike}>Like</button>
        

</div>

)
}

export default Post