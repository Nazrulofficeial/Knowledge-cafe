

const Bookmarks = ({Bookmark}) => {
    console.log(Bookmark);
    return (
        <div className="md:w-[500px]">
            <h2 className="text-3xl">Bookmarked blogs: {Bookmark.length}</h2>
            <h2>{}</h2>
        </div>
    );
};

export default Bookmarks;