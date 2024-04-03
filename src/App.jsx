import "./App.css";
import Header from "./Components/header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [Bookmark, setBookmark] = useState([]) 
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...Bookmark, blog]
    setBookmark(newBookmarks)
  }

  const handleReadingTime = time => {
    // console.log('Marking as read', time)
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex justify-center">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks Bookmark={Bookmark} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
