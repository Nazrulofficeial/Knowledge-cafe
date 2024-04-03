import NewBook from "../Bookmark/NewBook";

const Bookmarks = ({ Bookmark }) => {
    // console.log(Bookmark);
    return (
        <div className="md:w-[500px] bg-[#1111110D] ml-5 p-5 mt-8 rounded-2xl">
            <h2 className="text-3xl font-bold ml-4">Bookmarked blogs: {Bookmark.length}</h2>
            {
                Bookmark.map(bookmark => <NewBook key={bookmark.id} bookmark={bookmark}></NewBook>)
            }
        </div>
    );
};


export default Bookmarks;