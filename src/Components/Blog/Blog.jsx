import PropTypes from "prop-types";
import { HiOutlineBookmark } from "react-icons/hi";



const Blog = ({ blog, handleAddToBookmark }) => {
//   console.log(blog);
  const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
  return (
    <div className=" py-10 border-b-2">
        <img className="w-full" src={cover} alt={`cover picture of the title ${title}`} />
        <div className="flex justify-between items-center mt-8 mb-5">
            <div className="flex gap-6 items-center">
                <img className="w-14" src={author_img} alt="" />
                <div className="">
                    <h3 className="text-2xl font-bold">{author}</h3>
                    <p className="text-sm">{posted_date}</p>
                </div>
            </div>
            <div className="flex items-center">
                <span className="text-xl">{reading_time} min read</span>
                <button 
                    className="ml-2 text-2xl"
                    onClick={() => handleAddToBookmark(blog)}
                ><HiOutlineBookmark /></button>
            </div>
        </div>
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="mt-4">
            {
                hashtags.map((hash, idx) => <span key={idx}><a className="ml-2 text-[#11111199] font-medium" href="">#{hash}</a></span>)
            }
        </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func
};

export default Blog;
