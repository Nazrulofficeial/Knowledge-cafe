import "./App.css";
import Header from "./Components/header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [Bookmark, setBookmark] = useState([]) 

  const handleAddToBookmark = blog => {
    const newBookmarks = [...Bookmark, blog]
    setBookmark(newBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks Bookmark={Bookmark}></Bookmarks>
      </div>
    </>
  );
}

export default App;
