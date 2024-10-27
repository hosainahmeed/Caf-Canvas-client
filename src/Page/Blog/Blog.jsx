import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "../../Components/utils/sectionHeader";
import blogImages1 from "../../assets/images/BlogImage/IMG_5172.jpg";
import blogImages2 from "../../assets/images/BlogImage/DSC00692.jpg";
import blogImages3 from "../../assets/images/BlogImage/IMG_0536.jpg";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("Blog.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="flex py-28 flex-col items-center gap-12 justify-center px-4 md:px-8 lg:px-16">
      <SectionHeader head={"Latest from The Blog"} />
      
      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="card shadow-none rounded-none glass">
            <figure className="h-80 md:h-96">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body p-0 pt-6">
              <h2 className="card-title text-xl">{blog.title}</h2>
              <p className="text-gray-600">{blog.date}</p>
              <p className="text-gray-800">{blog.description}</p>
              <div className="card-actions justify-end mt-4">
                <button className="flex items-center gap-2 text-blue-500 hover:underline">
                  Read more <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div
        style={{ backgroundImage: `url(${blogImages3})` }}
        className="grid bg-cover bg-center w-full mt-28 grid-cols-1 md:grid-cols-4 gap-4 p-8 md:p-16"
      >
        {/* Image on Left */}
        <div
          style={{ backgroundImage: `url(${blogImages1})` }}
          className="h-64 md:h-96 bg-cover bg-center  md:col-span-1"
        ></div>

        {/* Newsletter Content */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-center text-center p-6 backdrop-blur-xl">
          <h1 className="text-2xl font-semibold text-white mb-4">Subscribe to our newsletter</h1>
          <p className="mb-6 text-white">Sign up with your email address to receive news and updates.</p>
          <div className="flex md:flex-row flex-col md:gap-0 gap-4 w-full max-w-md">
            <input
              className="input outline-none border-none w-full md:rounded-l-full px-4"
              placeholder="Email"
            />
            <button className="btn bg-lime-500 outline-none border-none text-white md:rounded-r-full px-6">
              Subscribe
            </button>
          </div>
        </div>

        {/* Image on Right */}
        <div
          style={{ backgroundImage: `url(${blogImages2})` }}
          className="h-64 md:h-96 bg-cover bg-center md:col-span-1 md:row-span-2"
        ></div>
      </div>
    </div>
  );
}

export default Blog;
