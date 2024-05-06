import React from 'react';
import Post from './post';


const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post
          key={post.id} 
          title={post.title.rendered} 
          content={post.content.rendered} 
          author={post.author} 
          date={post.date} 
        />
      ))}
    </div>
  );
}

export default PostList;