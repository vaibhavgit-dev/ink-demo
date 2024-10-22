"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AuthorsCards from "./authorsCards";
import { AuthorsList } from "@/app/API/allAuthorList";
import {
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiXCircle,
} from "react-icons/fi";
import AlphabetFilter from "@/app/components/AlphabetFilter";
import Loader from "@/app/components/Loader";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import slugify from "slugify";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search
  const [alphabetFilter, setAlphabetFilter] = useState("ALL"); // State for alphabetic filter
  const authorsPerPage = 18;

  // Sort authors in ascending order by author_name
  const sortedAuthorsList = AuthorsList.sort((a, b) => {
    const nameA = a.author_name.toLowerCase();
    const nameB = b.author_name.toLowerCase();
    return nameA.localeCompare(nameB); // Sort in ascending order
  });

  // Filter authors by search query and alphabetic filter
  const filteredAuthors = sortedAuthorsList.filter((author) => {
    let authorName = author.author_name || "Unknown Author"; // Handle undefined author names
    
    const matchesSearchQuery = authorName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  
    const excludePrefixes = ["brig", "dr.", "lt gen.", "colonel", "mrs."];
    
    excludePrefixes.forEach((prefix) => {
      if (authorName.toLowerCase().startsWith(prefix)) {
        authorName = authorName.substring(prefix.length).trim();
      }
    });
  
    const matchesAlphabet =
      alphabetFilter === "ALL" ||
      (authorName && authorName[0].toUpperCase() === alphabetFilter);
  
    return matchesSearchQuery && matchesAlphabet;
  });  
  
  const totalPages = Math.ceil(filteredAuthors.length / authorsPerPage);
  const indexOfLastAuthor = currentPage * authorsPerPage;
  const indexOfFirstAuthor = indexOfLastAuthor - authorsPerPage;
  const currentAuthors = filteredAuthors.slice(
    indexOfFirstAuthor,
    indexOfLastAuthor
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  // Ensure the current page is within the valid range when filtered authors change
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1); // Reset to last valid page or page 1
    }
  }, [filteredAuthors, totalPages, currentPage]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main
          className="flex flex-col h-full pb-20 mx-auto top_bg_gradient">
          <div className="container px-4 mx-auto">
            <div className="w-full flex justify-center">
              <h1 className="text-[42px] font-medium pt-20 pb-14">All Authors</h1>
            </div>

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
                    placeholder="Which Author interests you today?"
                    className="p-3 bg-transparent input-border shadow-sm rounded-3xl w-full mb-4 text-black pl-12 placeholder:italic"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1); // Reset to page 1 when searching
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="w-full pt-2">
              {/* Alphabet Filter */}
              <AlphabetFilter
                onFilter={(selectedAlphabet) => {
                  setAlphabetFilter(selectedAlphabet);
                  setCurrentPage(1); // Reset to page 1 when the alphabet filter changes
                }}
              />
            </div>

            {/* Authors Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-6">
              {currentAuthors.length > 0 ? (
                currentAuthors.map((author, i) => (
                  <div
                    key={i}
                    className="p-4 hover:shadow-md input-border border-[#ffffff00] hover:border-[#BABABA] rounded-md"
                  >
                    <Link href={`/authors/${author.authslug}`}>
                      <AuthorsCards
                        coverImage={author.image}
                        authorName={author.author_name || "Unknown Author"}
                      />
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full mt-4">
                  No results found
                </p>
              )}
            </div>

            {/* Pagination Controls */}
            <div className="w-full flex-wrap  md:flex justify-center md:justify-between mt-10">
              {currentAuthors.length > 0 && (
                <div className="flex justify-center pb-5 md:justify-between">
                  <i>
                    <p>
                      Showing {indexOfFirstAuthor + 1}-{""}
                      {Math.min(
                        indexOfLastAuthor,
                        filteredAuthors.length
                      )} of {filteredAuthors.length} Authors
                    </p>
                  </i>
                </div>
              )}

              {currentAuthors.length > 0 && totalPages > 1 && (
                <div className="flex justify-center gap-2 items-center">
                  {currentPage > 1 && (
                    <button
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                      className={`p-2 mx-2 flex items-center ${
                        currentPage === 1
                          ? "cursor-not-allowed text-[#241b6d]"
                          : "hover:rounded-md text-[#241b6d] hover:text-[#241b6d]"
                      }`}
                    >
                      <MdOutlineArrowLeft className="w-6 h-6" />
                    </button>
                  )}

                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`p-1 px-2.5 py-0 text-lg font-medium font-barlow text-[#8A8A8A] rounded-full ${
                        currentPage === i + 1
                          ? "bg-[#8A8A8A66] text-black"
                          : "bg-white hover:bg-[#241b6d] hover:text-white"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className={`p-2 mx-2 flex items-center ${
                      currentPage === totalPages
                        ? "cursor-not-allowed text-[#241b6d]"
                        : "hover:rounded-md text-[#241b6d] hover:text-[#241b6d]"
                    }`}
                  >
                    <MdOutlineArrowRight className="text-[#241b6d] w-6 h-6" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
