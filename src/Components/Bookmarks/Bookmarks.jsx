import NewBook from "../Bookmark/NewBook";

const Bookmarks = ({ Bookmark, readingTime }) => {
  // console.log(Bookmark);
  return (
    <div>
      <div className="md:w-[500px] bg-[#6047E41A] ml-5 p-5 mt-8 rounded-2xl border-[1px] border-[#6047EC]">
        <h2 className="text-3xl font-bold text-center text-[#6047EC]">Spent time on read : {readingTime} min</h2>
      </div>
      <div className="md:w-[500px] bg-[#1111110D] ml-5 p-5 mt-8 rounded-2xl">
        <h2 className="text-3xl font-bold ml-4">
          Bookmarked blogs: {Bookmark.length}
        </h2>
        {Bookmark.map((bookmark) => (
          <NewBook key={bookmark.id} bookmark={bookmark}></NewBook>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
