import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/Blogs'
import { useState } from 'react'

function App() {

  const [bookmarked, setBookmarked] = useState([]);
  const [readingcount, setReadingcount] = useState(0);

  const handleBookmark = (blog) => {
    setBookmarked([...bookmarked,blog])
  }

 const handleMarkAsRead = (time, id) => {
  const newTime = readingcount + time;
  setReadingcount(newTime);
  handleRemoveBookmark(id)
 }

 const handleRemoveBookmark = (id) => {
  const remainingBookmark = bookmarked.filter((mark) => mark.id !== id);
  setBookmarked(remainingBookmark);
  console.log(remainingBookmark);
  
 }

//  console.log(readingcount);
 
  


  return (
    <>
    <nav className="px-20 py-4">
     <Navbar  ></Navbar>
    </nav>

    <div className="blog-container px-20 ">

    </div>

     <div className="main-container flex px-20 my-2 mx-auto gap-2">
      <div className="left-container px-4 mx-auto items-center min-w-8/12 border-2 border-amber-400 rounded-2xl">
       <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead} className="blog-container px-20"></Blogs>
      </div>
      <div className="right-container px-4 py-4 mx-auto items-center min-w-4/12 border-2 border-red-400 rounded-2xl">
        <h1 className='font-bold'>Readig Time : {readingcount}</h1>
        <h1 className='font-bold'>Bookmarked Count : {bookmarked.length}</h1> 
        {
          bookmarked.map((marked) => <p className='text-center bg-slate-100 shadow-amber-600 p-2 my-2 border border-slate-300 rounded-lg' >{marked.title}</p>)
        }
      </div>
     </div>
    </>
  )
}

export default App
 