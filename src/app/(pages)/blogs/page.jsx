"use client";
import { useState, useEffect } from "react";
import { FiSearch, FiXCircle } from "react-icons/fi";
import Loader from "@/app/components/Loader";
import BlogsCards from "./BlogsCards";
import { allBlogsList } from "@/app/API/allBlogsList";
import Link from "next/link";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState(allBlogsList);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; // Number of blogs per page

  // Calculate the index range for the current page's blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get blogs for the current page
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Total number of pages
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500); // Simulating loading
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="flex flex-col h-full pb-20 mx-auto top_bg_gradient">
          <div className="container px-4 mx-auto">
            <div className="w-full flex justify-center">
              <h1 className="text-[42px] font-medium pt-20 pb-14">All Blogs</h1>
            </div>

            {/* Search Bar */}
            <div className="w-full flex justify-between items-center pt-6 pb-2">
              <div className="w-full">
                <div className="relative">
                  <FiSearch className="absolute left-4 top-3 w-6 h-6 text-[#8A8A8A]" />
                  {searchQuery && (
                    <FiXCircle
                      className="absolute right-4 top-3.5 w-6 h-6 text-[#8A8A8A] cursor-pointer"
                      onClick={() => setSearchQuery("")}
                    />
                  )}
                  <input
                    type="text"
                    placeholder="Which blog interests you today?"
                    className="p-3 bg-transparent input-border shadow-sm rounded-3xl w-full mb-4 text-black pl-12 placeholder:italic"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Blogs Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
              {currentBlogs.map((blog) => (
                <Link href={`/blogs/${blog.blogslug}`}>
                <BlogsCards
                  key={blog.id}
                  title={blog.title}
                  blogimage={blog.blogimage}
                  imageContainerClass="h-[200px] lg:h-[300px]"
                />
              </Link>              
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="w-full flex-wrap md:flex justify-center md:justify-between mt-10">
              {currentBlogs.length > 0 && (
                <div className="flex justify-center pb-5 md:justify-between">
                  <i>
                    <p>
                      Showing {indexOfFirstBlog + 1}-
                      {Math.min(indexOfLastBlog, filteredBlogs.length)} of{" "}
                      {filteredBlogs.length} Blogs
                    </p>
                  </i>
                </div>
              )}

              {totalPages > 1 && (
                <div className="flex justify-center gap-2 items-center">
                  {currentPage > 1 && (
                    <button
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                      className="p-2 mx-2 flex items-center text-[#241b6d] hover:rounded-md hover:text-[#241b6d]"
                    >
                      Previous
                    </button>
                  )}

                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`p-1 px-2.5 text-lg font-medium text-[#8A8A8A] rounded-full ${
                        currentPage === i + 1
                          ? "bg-[#8A8A8A66] text-black"
                          : "bg-white hover:bg-[#241b6d] hover:text-white"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  {currentPage < totalPages && (
                    <button
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                      className="p-2 mx-2 flex items-center text-[#241b6d] hover:rounded-md hover:text-[#241b6d]"
                    >
                      Next
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
