const BlogList = ({ blogs, title, handleDelete }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{blog.title}</h2>
                    <h4>Written by {blog.author}</h4>
                    <p>{blog.body}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete post</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;