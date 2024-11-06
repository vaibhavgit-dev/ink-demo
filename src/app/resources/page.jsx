"use client";
import { useState, useEffect } from "react";
import Loader from "@/app/components/Loader";
import ResourceCards from "./ResourceCard";
import Link from "next/link";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Simulate data fetching
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setResources([
        { id: 1, title: "Blogs", image: "/blogs.png", link: "/blogs" },
        { id: 2, title: "Policies", image: "/policies.png", link: "/resources/policies" },
        { id: 3, title: "Gallery", image: "/gallery.png", link: "/comingsoon" },
        { id: 4, title: "Brand Assets", image: "/brandasset.png", link: "/comingsoon" },
        { id: 5, title: "Books", image: "/bookresours.png", link: "/comingsoon" },
        { id: 6, title: "Authors", image: "/authorresourse.png", link: "/comingsoon" },
        // Add more resources as needed
      ]);
      setLoading(false);
    }, 500);
  }, []);

  // Pagination calculations
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentResources = resources.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(resources.length / blogsPerPage);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="flex flex-col h-full pb-20 mx-auto top_bg_gradient">
          <HelmetProvider>
  <Helmet>
    <title>Resources | BluOne Ink Publishing</title>
    <meta name="description" content="" />
  </Helmet>
</HelmetProvider>
          <div className="container px-4 mx-auto">
            <div className="w-full flex justify-center">
              <h1 className="text-[42px] font-medium pt-20 pb-14">Resources</h1>
            </div>

            {/* Resource Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 pt-6">
              {currentResources.map((resource) => (
                <div key={resource.id} className="w-full min-h-[150px] lg:min-h-[300px] p-3 hover:shadow-lg">
                  <div className="flex flex-col h-full pb-1">
                    <Link href={resource.link}>
                      <div className="h-[200px] lg:h-[300px]">
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="pt-4 uppercase font-medium font-barlow leading-6">
                          {resource.title}
                        </h6>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {/* {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-10">
                {currentPage > 1 && (
                  <button
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="p-2 text-[#241b6d] hover:rounded-md hover:text-[#241b6d]"
                  >
                    Previous
                  </button>
                )}
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`p-1 px-2.5 text-lg font-medium rounded-full ${
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
                    className="p-2 text-[#241b6d] hover:rounded-md hover:text-[#241b6d]"
                  >
                    Next
                  </button>
                )}
              </div>
            )} */}
          </div>
        </main>
      )}
    </>
  );
}
