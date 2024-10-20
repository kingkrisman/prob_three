import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, author, content, date }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="blog-post">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-author">By {author}</p>
      <p className="blog-date">{formattedDate}</p>
      <div className="blog-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogPost;