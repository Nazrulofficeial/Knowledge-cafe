const NewBook = ({ bookmark }) => {
    const {title} = bookmark;
    return (
        <div className="bg-white p-4 m-4 rounded-xl">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

export default NewBook;