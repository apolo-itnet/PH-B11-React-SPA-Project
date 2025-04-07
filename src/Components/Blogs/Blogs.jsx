import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark, handleMarkAsRead}) => {

  const [blogs, setBlogs] = useState([]);

  useEffect( () => {
    fetch("blogs.json")
    .then(response => response.json())
    .then(data => setBlogs(data))
  }, [])

  // console.log(blogs)

  return (
    <div>
        <h1 className="text-2xl font-bold" >Total Blogs : {blogs.length}</h1>

        <div className="all-blogs grid grid-cols-2">
          {
            blogs.map((blog) => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead} ></Blog>)
          }
        </div>

    </div>
  );
};

export default Blogs;