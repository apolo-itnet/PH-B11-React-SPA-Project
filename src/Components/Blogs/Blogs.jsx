import React, { useEffect, useState } from 'react';

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect( () => {
    fetch("blogs.json")
    .then(response => response.json())
    .then(data => setBlogs(data))
  }, [])

  console.log(blogs)

  return (
    <div>
      
    </div>
  );
};

export default Blogs;