import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {
  // console.log(props.blog);
  
  
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm m-2 ">
        <figure className="">
          <img
            src={blog.cover}
            alt="Shoes"
            className="rounded-tl-lg rounded-tr-lg w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="author flex justify-between items-center gap-10 ">
            <h1 className="card-author font-bold">{blog.author}</h1>
            <img src={blog.author_img} alt="" className="w-10" /> 
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <p className="font-extrabold">
            {blog.posted_date}
          </p>
          <div className="hastag-container flex gap-4">
            {
            blog.hashtags.map((hash) => <p key={hash}>{hash}</p>)
          }
          </div>
          <div className="card-actions flex w-full justify-between">
            <button onClick={() => handleBookmark(blog)} className="btn btn-primary text-white shadow-none">Bookmark <FaBookmark  size={20} /></button>
            <button onClick={() => handleMarkAsRead(blog.reading_time, blog.id)} className="btn btn-primary text-white shadow-none">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;