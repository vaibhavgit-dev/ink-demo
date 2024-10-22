"use client";
import { useState, useEffect } from "react";
import { allBlogsList } from "@/app/API/allBlogsList";
import Loader from "@/app/components/Loader";
import inkdouble1 from "@/app/assests/image/inkdouble1.svg";
import inkdouble2 from "@/app/assests/image/inkdouble2.svg";
import BlogsCards from "../BlogsCards";
import Link from "next/link";
import Image from "next/image";

const Page = ({ params }) => {
  const { blogslug } = params;

  const blog = allBlogsList.find((blog) => blog.blogslug === blogslug);
  const defaultimage =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (!blog && !loading) {
    return <div>Blog not found.</div>;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="wrapper pt-0 mt-0 pb-20 relative top-0">
          {/* Page Container */}
          <div className="w-full bottom-0">
            <img
              src={blog?.blogbanner || defaultimage}
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="container relative z-[1111]">
  <div className="blog-wrapper p-10 w-[70%] -mt-96 mx-auto bg-white rounded-3xl shadow-md">
    <h3 className="text-center">{blog?.title || "Blog"}</h3>
    
    {/* Display Blog Content with Image */}
    <div className="blog-content">
      {/* Blog Data */}
      <p>{blog?.blogdatastart}</p>

      {/* Blog Image */}
      {blog?.blogimage && (
        <div className="w-full my-4">
          <img
            src={blog.blogimage}
            alt="Blog Image"
            className="w-full h-auto mx-auto rounded-md"
          />
        </div>
      )}

      {/* Blog Data */}
      <p>{blog?.blogdatafull}</p>

    </div>
  </div>
</div>


          {/* Other Books by the Same Author */}
          <section id="related-titles" className="container">
            <div className="flex items-center gap-2 justify-center pb-2 pt-20">
              <Image src={inkdouble1} width={55} height={55} alt="inkdouble1" />
              <i>
                <h3 className="font-medium text-2xl md:text-2xl text-center">
                  Related Blogs
                </h3>
              </i>
              <Image src={inkdouble2} width={55} height={55} alt="inkdouble2" />
            </div>
            <div className="flex items-center justify-center pb-6">
              <Link href="/blogs">
                <i>
                  <h4 className="text-[#007DD7] text-base underline font-medium">
                    View All Titles
                  </h4>
                </i>
              </Link>
            </div>
            <div
  className={`grid grid-cols-3 ${
    allBlogsList.length < 6 ? "justify-between" : "justify-center"
  }`}
>
  {allBlogsList
    .filter((relatedBlog) => relatedBlog.blogslug !== blogslug) // Filter out the current blog
    .slice(0, 3) // Limit to 3 related blogs
    .map((filteredBlog, i) => (
      <div
        key={i}
        className="p-4 mb-4 hover:shadow-md input-border border-[#ffffff00] hover:border-[#BABABA] rounded-md"
      >
        <Link href={`./${filteredBlog.blogslug}`} style={{ textDecoration: "none" }}>
          <BlogsCards
            key={filteredBlog.id}
            title={filteredBlog.title}
            blogimage={filteredBlog.blogimage || defaultimage}
            imageContainerClass="h-[200px] lg:h-[300px]"
          />
        </Link>
      </div>
    ))}
</div>

          </section>
        </main>
      )}
    </>
  );
};

export default Page;
