import React from 'react';
import BlogPost from './BlogPost'; 

const PostList = () => {
  const blogPosts = [
    {
      title: 'Needing Money',
      author: 'Christian Daniels',
      content: 'I need money like maddddddd',
      date: '2024-10-15',
    },
    {
      title: 'Happy Today',
      author: 'Nifemi Mayor',
      content: 'I am so happy today because i got a new pair of shoes',
      date: '2024-09-25',
    },
    {
      title: 'Why JavaScript is Essential',
      author: 'Comrade Daniels',
      content: 'JavaScript is the backbone of modern web development...',
      date: '2024-08-30',
    },
  ];

  return (
    <div className="post-list">
      {blogPosts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          author={post.author}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default PostList;