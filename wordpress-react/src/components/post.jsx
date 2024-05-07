import React from 'react';

const Post = ({ title, content, author, date }) => {
  return (
    <div className="post" style={{ backgroundColor: '#007bff', color: '#ffffff' }}>
      <h2>{title}</h2>
      {content}
      <div className="post-details">
        <p><strong>Autore:</strong> {author}</p>
        <p><strong>Data di pubblicazione:</strong> {date}</p>
      </div>
    </div>
  );
}

export default Post;