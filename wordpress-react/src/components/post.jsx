import React from 'react';

const Post = ({ title, content, author, date }) => {
  return (
    <div className="post" style={{ backgroundColor: '#007bff', color: '#ffffff' }}>
     <div>
      <h2>{title}</h2>
     {content}
     </div>
      <div className="post-details">
        <p style={{ color: '#1A3CC1' }}><strong>Autore:</strong> <span style={{ color: 'white' }}>{author}</span></p>
        <p style={{ color: '#1A3CC1' }}><strong>Data di pubblicazione:</strong> <span style={{ color: 'white' }}>{date}</span></p>
      </div>
    </div>
  );
}

export default Post;