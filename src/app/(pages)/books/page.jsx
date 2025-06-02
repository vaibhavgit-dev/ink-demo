"use client";
import { useState, useRef, useEffect } from "react";
import { fetchAllBooks, processBookData } from "@/app/API/booksapi";
import { AuthorsList } from "@/app/API/allAuthorList";
import BooksCards from "./BooksCards";
import {
  FiSearch,
  FiXCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Link from "next/link";
import Loader from "@/app/components/Loader";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [genreFilter, setGenreFilter] = useState([]);
  const [languageFilter, setLanguageFilter] = useState([]);
  const [formatFilter, setFormatFilter] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const filterRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const limit = parseInt(searchParams.get('limit') || '15', 10);

  // Fetch all books on component mount
  useEffect(() => {
    async function fetchBooks() {
      try {
        setLoading(true);
        const category = searchParams.get('category') || '';
        const page = searchParams.get('page') || '1';
        const limit = searchParams.get('limit') || '15';

        let apiUrl = "https://dashboard.bluone.ink/api/public/books?";
        const queryParams = [];

        if (category) {
          queryParams.push(`category=${encodeURIComponent(category)}`);
        }
        queryParams.push(`page=${page}`);
        queryParams.push(`limit=${limit}`);

        apiUrl += queryParams.join('&');

        const res = await fetch(apiUrl);

        if (!res.ok) {
          throw new Error(`Failed to fetch books: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        // Assuming the API response structure includes the books array directly
        // and potentially total count if the API supports it with these parameters.
        // If the API response is different, this part might need adjustment.
        const processedBooks = data.map(book => processBookData(book)); // Still process the data if needed
        setBooks(processedBooks);
        setCurrentPage(parseInt(page, 10));
        // You might need to set totalPages here if the API provides total count in the response
        // e.g., setTotalPages(data.totalPages) or similar

        setError(null);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to load books. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, [searchParams]); // Re-run effect when search params change

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };

    if (showFilters) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilters]);

  // Extract unique values from books for filters
  const category = [...new Set(books.filter(book => book.category).map(book => book.category))];
  const language = [...new Set(books.filter(book => book.language).map(book => book.language))];
  const format = [...new Set(books.filter(book => book.book_format).map(book => book.book_format))];
  const genre = [...new Set(books.filter(book => book.genre).map(book => book.genre))];
  
  const prices = [
    { label: "Under 399", range: [0, 399] },
    { label: "Between 400-599", range: [400, 599] },
    { label: "Above 600", range: [600, Infinity] },
  ];

  const handleFilterChange = (filter, setFilter, value) => {
    setFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const resetFilters = () => {
    setSortOption("");
    setCategoryFilter([]);
    setGenreFilter([]);
    setLanguageFilter([]);
    setFormatFilter([]);
    setPriceRange([]);
    setSearchQuery("");
  };

  // Handle multi-select price range
  const handlePriceRangeChange = (range) => {
    if (priceRange.some((r) => r[0] === range[0] && r[1] === range[1])) {
      setPriceRange(
        priceRange.filter((r) => r[0] !== range[0] || r[1] !== range[1])
      );
    } else {
      setPriceRange([...priceRange, range]);
    }
  };

  const filteredBooks = books.filter((book) => {
    const authorName = book.author?.author_name || (Array.isArray(book.author) ? book.author.join(' ') : book.author);
    
    const searchCondition =
      searchQuery === "" || 
      book.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      authorName?.toLowerCase().includes(searchQuery.toLowerCase());

    const categoryCondition = true;

    const genreCondition =
      genreFilter.length === 0 ||
      genreFilter.some((genre) => {
        const [category, subgenre] = genre.split(": ");
        return book.category === category && book.genre && book.genre.includes(subgenre);
      });

    const formatCondition =
      formatFilter.length === 0 || formatFilter.includes(book.book_format);

    const languageCondition =
      languageFilter.length === 0 || languageFilter.includes(book.language);

    const priceCondition =
      priceRange.length === 0 ||
      priceRange.some(([min, max]) => book.price >= min && book.price <= max);

    return (
      searchCondition &&
      categoryCondition &&
      genreCondition &&
      formatCondition &&
      languageCondition &&
      priceCondition
    );}).sort((a, b) => {
      // Sort by book id in descending order to show the latest book first
      return b.id - a.id;
    });

  // Apply sorting
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOption === "Title: A to Z") return a.title.localeCompare(b.title);
    if (sortOption === "Title: Z to A") return b.title.localeCompare(a.title);
    if (sortOption === "Price: Lowest First") return a.price - b.price;
    if (sortOption === "Price: Highest First") return b.price - a.price;
    if (sortOption === "Publish Year: Newest First")
      return b.publish_year - a.publish_year;
    if (sortOption === "Publish Year: Oldest First")
      return a.publish_year - b.publish_year;
    return 0;
  });

  const currentBooks = books; // Use API result directly

  const getCountByCategory = (category) => {
    return books.filter((book) => book.category === category).length;
  };

  const getCountByLanguage = (language) => {
    return books.filter((book) => book.language === language).length;
  };

  const getCountByFormat = (format) => {
    return books.filter((book) => book.book_format === format).length;
  };

  const getCountByPriceRange = (range) => {
    return books.filter(
      (book) => book.price >= range[0] && book.price <= range[1]
    ).length;
  };

  // Advanced Pagination window logic
  const pageWindow = 5;
  let lastPage = currentBooks.length < limit ? currentPage : currentPage + pageWindow;
  if (currentBooks.length < limit) lastPage = currentPage; // If last page, don't show more
  let pageNumbers = [];
  if (currentPage <= pageWindow + 1) {
    for (let i = 1; i <= lastPage; i++) {
      if (i > 0) pageNumbers.push(i);
    }
  } else {
    pageNumbers = [1];
    if (currentPage - pageWindow > 2) {
      pageNumbers.push('ellipsis-start');
    }
    for (let i = currentPage - pageWindow; i <= lastPage; i++) {
      if (i > 1) pageNumbers.push(i);
    }
  }
  // Remove duplicates and sort
  pageNumbers = [...new Set(pageNumbers)].sort((a, b) => (a === 'ellipsis-start' ? 1 : a) - (b === 'ellipsis-start' ? 1 : b));

  const handlePageChange = (newPage) => {
    let url = `/books?page=${newPage}&limit=${limit}`;
    const category = searchParams.get('category');
    if (category) url += `&category=${encodeURIComponent(category)}`;
    router.push(url);
  };

  // Error state
  if (error) {
    return (
      <div className="container mx-auto py-10 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Error</h2>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<div>Loading filters...</div>}>
          <main className="flex flex-col h-full pb-20 mx-auto top_bg_gradient">
            <HelmetProvider>
              <Helmet>
                <title>All Books | BluOne Ink Publishing</title>
                <meta name="description" content="Fiction, Non-fiction, and Children books published in HARDCOVER, PAPERBACK, and eBook formats, in English, Hindi, Rajasthani, Bengali, Marathi and Telugu." />
                <link rel="canonical" href="https://www.bluone.ink/books" />
              </Helmet>
            </HelmetProvider>
            <div className="container px-8  mx-auto">
              <div className="w-full flex justify-center">
                <h1 className="text-[42px] font-medium pt-20 pb-20">All Books</h1>
              </div>
              <div className="w-full flex-wrap md:flex gap-4 relative">
                <div className="w-[50%] md:px-4 md:w-[18%]">
                  <button
                    className="input-border flex justify-center rounded-3xl text-[#8A8A8A] p-3 mb-4 w-full"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <i>
                      <span className="flex gap-6 font-ibm items-center">
                        {showFilters ? "Sort & Filter" : "Sort & Filter"}
                        {showFilters ? (
                          <IoMdArrowDropup className="w-5 h-5" />
                        ) : (
                          <IoMdArrowDropdown className="w-5 h-5" />
                        )}
                      </span>
                    </i>
                  </button>

                  {showFilters && (
                    <div
                      className="w-full absolute gap-4 mb-4 z-[111]"
                      ref={filterRef}
                    >
                      <div className="border-[#8A8A8A] p-6 rounded-2xl shadow-xl bg-white hover:shadow-2xl sm:p-6 md:p-8 book_filter">
                        <div className="flex flex-col md:flex-row">
                          {/* Sort Section */}
                          <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <i>
                              <h4 className="font-semibold mb-2 text-[#007DD7] text-2xl">
                                Sort
                              </h4>
                            </i>
                            <div className="flex flex-col ">
                              {[
                                "Title: A to Z",
                                "Title: Z to A",
                                "Price: Lowest First",
                                "Price: Highest First",
                                "Publish Year: Newest First",
                                "Publish Year: Oldest First",
                              ].map((option) => (
                                <label
                                  key={option}
                                  className={`text-md text-[#0D1928] font-normal pt-1 flex items-center cursor-pointer ${
                                    sortOption === option
                                      ? "text-[#0D1928] font-semibold"
                                      : "font-normal"
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="sort"
                                    value={option}
                                    onChange={(e) =>
                                      setSortOption(e.target.value)
                                    }
                                    className="hidden"
                                  />
                                  <span className="font-ibm">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* Divider */}
                          <div className="hidden md:block border-l border-gray-300 mx-4"></div>

                          {/* Genre & Category Section */}
                          <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <i>
                              <h4 className="font-semibold mb-3 text-[#007DD7] text-2xl">
                                Genre & Category
                              </h4>
                            </i>
                            {category.map((g) => (
                              <div className="category_filter" key={g}>
                                <label
                                  className={`text-md pt-2 flex place-items-center text-[#0D1928] cat_label font-normal ${
                                    categoryFilter.includes(g)
                                      ? "font-semibold"
                                      : "font-normal"
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    value={g}
                                    checked={categoryFilter.includes(g)}
                                    onChange={() =>
                                      handleFilterChange(
                                        categoryFilter,
                                        setCategoryFilter,
                                        g
                                      )
                                    }
                                  />{" "}
                                  <span className="ml-2 cat_span font-ibm">
                                    {g} ({getCountByCategory(g)})
                                  </span>
                                </label>

                                {/* Subcategories (Genres) */}
                                {["Fiction", "Non-Fiction", "Children"].includes(
                                  g
                                ) && (
                                  <div className="sub_cat_label" style={{marginLeft: "30px"}}>
                                    {g === "Fiction" &&
                                      [
                                        // "Historial & Mythological Fiction",
                                        "Religion & Spirituality",
                                        "Action & Adventure",
                                        "Poetry",
                                        "Indian Languages",
                                        "Short Stories & Anthologies",
                                        "Society & Social Sciences",
                                        "Fantasy & Science Fiction",
                                        "Crime, Thriller & Mystery",
                                        "Arts, Film & Photography",
                                        "Crime Fiction",
                                        "Thriller and Suspense",
                                        "Mystery",
                                      ].map((subcategory) => (
                                        <label
                                          key={`${g}: ${subcategory}`} // Unique key using category and subcategory
                                          className="text-md pt-1 block text-[#0D1928] font-normal font-ibm subcat_label"
                                        >
                                          <input
                                            type="checkbox"
                                            value={`${g}: ${subcategory}`} // Value combines category and subcategory
                                            checked={genreFilter.includes(
                                              `${g}: ${subcategory}`
                                            )}
                                            onChange={() =>
                                              handleFilterChange(
                                                genreFilter,
                                                setGenreFilter,
                                                `${g}: ${subcategory}` // Use combined value
                                              )
                                            }
                                          />{" "}
                                          <span className="ml-2 flex-1 subcat_span font-ibm">
                                            {subcategory}
                                          </span>
                                        </label>
                                      ))}

                                    {g === "Non-Fiction" &&
                                      [
                                        // "Action & Adventure",
                                        // "Crime, Thriller & Mystery",
                                        // "Historical & Mythological Fiction",
                                        // "Classics",
                                        "Religion & Spirituality",
                                        // "Arts, Film & Photography",
                                        "Biography, Autobiography, & True Accounts",
                                        "Economics, Finance, Business & Management",
                                        "Politics & Governance",
                                        "Military & Defence",
                                        "Health & Wellness",
                                        "Science & Technology",
                                        "Society & Social Sciences",
                                        "Indian Languages",
                                        "Self-Help & Development",
                                        "Law & Public Policy",
                                        // "Fantasy & Science Fiction",
                                        "Essays & Anthologies",
                                        "Educational Books & References",
                                      ].map((subcategory) => (
                                        <label
                                          key={`${g}: ${subcategory}`}
                                          className="text-md pt-1 block text-[#0D1928] font-normal font-ibm subcat_label"
                                        >
                                          <input
                                            type="checkbox"
                                            value={`${g}: ${subcategory}`}
                                            checked={genreFilter.includes(
                                              `${g}: ${subcategory}`
                                            )}
                                            onChange={() =>
                                              handleFilterChange(
                                                genreFilter,
                                                setGenreFilter,
                                                `${g}: ${subcategory}` // Use combined value
                                              )
                                            }
                                          />{" "}
                                          <span className="ml-2 flex-1 subcat_span font-ibm">
                                            {subcategory}
                                          </span>
                                        </label>
                                      ))}

                                    {g === "Children" &&
                                      [
                                        "Action & Adventure",
                                        "Self-Help & Development",
                                        "Classics",
                                        "Life Skills and Development",
                                      ].map((subcategory) => (
                                        <label
                                          key={`${g}: ${subcategory}`}
                                          className="text-md pt-1 block text-[#0D1928] font-normal font-ibm subcat_label"
                                        >
                                          <input
                                            type="checkbox"
                                            value={`${g}: ${subcategory}`}
                                            checked={genreFilter.includes(
                                              `${g}: ${subcategory}`
                                            )}
                                            onChange={() =>
                                              handleFilterChange(
                                                genreFilter,
                                                setGenreFilter,
                                                `${g}: ${subcategory}`
                                              )
                                            }
                                          />{" "}
                                          <span className="ml-2 flex-1 subcat_span font-ibm">
                                            {subcategory}
                                          </span>
                                        </label>
                                      ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Divider */}
                          <div className="hidden md:block border-l border-gray-300 mx-4"></div>

                          {/* Language & Format Section */}
                          <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <i>
                              <h4 className="font-semibold mb-3 text-[#007DD7] text-2xl">
                                Language
                              </h4>
                            </i>
                            {language.map((lang) => (
                              <div className="w-full" key={lang}>
                                <label
                                  className={`text-md pt-1 flex place-items-center text-[#0D1928] font-normal ${
                                    languageFilter.includes(lang)
                                      ? "font-semibold"
                                      : "font-normal"
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    value={lang}
                                    checked={languageFilter.includes(lang)}
                                    onChange={() =>
                                      handleFilterChange(
                                        languageFilter,
                                        setLanguageFilter,
                                        lang
                                      )
                                    }
                                  />{" "}
                                  <span className="ml-2 font-ibm">
                                    {lang} ({getCountByLanguage(lang)})
                                  </span>
                                </label>
                              </div>
                            ))}

                            {/* Divider */}
                            <div className="border-b border-gray-300 mx-2 pb-3 pt-3"></div>

                            <i>
                              <h4 className="font-semibold pt-3 mb-3 text-[#007DD7] text-2xl">
                                Format
                              </h4>
                            </i>
                            {format.map((fmt) => (
                              <div className="w-full" key={fmt}>
                                <label
                                  className={`text-md pt-1 flex place-items-center text-[#0D1928] font-normal ${
                                    formatFilter.includes(fmt)
                                      ? "font-semibold"
                                      : "font-normal"
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    value={fmt}
                                    checked={formatFilter.includes(fmt)}
                                    onChange={() =>
                                      handleFilterChange(
                                        formatFilter,
                                        setFormatFilter,
                                        fmt
                                      )
                                    }
                                  />{" "}
                                  <span className="ml-2 font-ibm">
                                    {fmt} ({getCountByFormat(fmt)})
                                  </span>
                                </label>
                              </div>
                            ))}
                          </div>

                          {/* Divider */}
                          <div className="hidden md:block border-l border-gray-300 pb-3 mx-4"></div>

                          {/* Price Section */}
                          <div className="w-full md:w-1/3 flex flex-col justify-between">
                            <div className="w-full mb-6 md:mb-0">
                              <i>
                                <h4 className="font-semibold mb-3 text-[#007DD7] text-2xl">
                                  Price
                                </h4>
                              </i>
                              {prices.map(({ label, range }) => (
                                <div key={label} className="w-full ">
                                  <label
                                    className={`text-md pt-1 flex place-items-center text-[#0D1928] font-normal ${
                                      priceRange.some(
                                        (r) =>
                                          r[0] === range[0] && r[1] === range[1]
                                      )
                                        ? "font-semibold"
                                        : "font-normal"
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      name="price"
                                      value={label}
                                      checked={priceRange.some(
                                        (r) =>
                                          r[0] === range[0] && r[1] === range[1]
                                      )}
                                      onChange={() =>
                                        handlePriceRangeChange(range)
                                      }
                                    />{" "}
                                    <span className="ml-2 font-ibm">
                                      {label} ({getCountByPriceRange(range)})
                                    </span>
                                  </label>
                                </div>
                              ))}
                            </div>

                            <div className="w-full font-barlow">
                              <div className="flex gap-4">
                                <div className="w-full ">
                                  <button
                                    className="mt-4  font-normal border-2 text-black py-2 px-4 rounded-3xl hover:bg-[#241b6d] hover:text-white w-full"
                                    onClick={() => setShowFilters(!showFilters)}
                                  >
                                    CLOSE
                                  </button>
                                </div>
                                <div className="w-full">
                                  <button
                                    className="mt-4 font-normal text-black py-2 px-4 rounded-3xl hover:bg-[#241b6d] hover:text-white w-full"
                                    onClick={resetFilters}
                                  >
                                    RESET
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-full flex-1">
                  <div className="relative flex h-[52px]">
                    <FiSearch className="absolute searchicon left-4 w-6 h-6 text-[#8A8A8A]" />
                    {searchQuery && (
                      <FiXCircle
                        className="absolute right-4 top-3.5 w-6 h-6 text-gray-500 cursor-pointer"
                        onClick={() => setSearchQuery("")}
                      />
                    )}
                    <input
                      type="text"
                      placeholder="Which Book or Author interests you today?"
                      className="p-3 h-[52px] bg-transparent input-border shadow-sm rounded-3xl w-full mb-4 text-black pl-12 placeholder:italic"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-8 pb-6">
                {currentBooks.length > 0 ? (
                  currentBooks.map((book) => {
                    const authorName = book.author?.author_name || (Array.isArray(book.author) ? book.author.join(', ') : book.author);
                    return (
                      <div
                        key={book.id}
                        className="p-4 mb-4 hover:shadow-md input-border border-[#ffffff00] hover:border-[#BABABA] rounded-md"
                      >
                        <Link
                          href={`./books/${encodeURIComponent(book.slug)}`}
                          style={{ textDecoration: "none" }}
                        >
                          <BooksCards
                            title={book.title}
                            coverImage={book.book_image}
                            bookPrice={`₹${book.price}`}
                            authorName={book.authorNames}
                            imageContainerClass={`h-[200px] lg:h-[250px]`}
                            slug={book.slug}
                            language={book.language}
                            format={book.book_format === 'PAPERBACK' ? 'PB' : book.book_format === 'HARDBACK' ? 'HB' : book.book_format}
                          />
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center col-span-full mt-4">
                    No results found
                  </p>
                )}
              </div>

              {/* Pagination Controls */}
              {currentBooks.length > 0 && (
                <div className="w-full flex-wrap md:flex justify-center md:justify-between pt-4">
                  <div className="flex justify-center md:justify-between">
                    <i>
                      <p>
                        Showing page {currentPage}
                      </p>
                    </i>
                  </div>
                  <div className="flex justify-center gap-2 items-center">
                    {pageNumbers.map((pageNum, idx) => (
                      pageNum === 'ellipsis-start' ? (
                        <span key={"ellipsis-"+idx} className="px-2">...</span>
                      ) : (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`p-1 px-2.5 py-0 text-lg font-medium font-barlow text-[#8A8A8A] rounded-full  ${
                            pageNum === currentPage
                              ? "bg-[#8A8A8A66] text-black"
                              : "bg-white hover:bg-[#241b6d] hover:text-white"
                          }`}
                          disabled={pageNum === currentPage}
                        >
                          {pageNum}
                        </button>
                      )
                    ))}
                    {currentBooks.length === limit && lastPage > currentPage && (
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="p-2 mx-2 flex items-center text-[#241b6d] hover:rounded-md hover:text-[#241b6d]"
                        aria-label="Next page"
                      >
                        <span style={{fontSize: '1.2em', lineHeight: 1}}>▶</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </main>
        </Suspense>
      )}
    </>
  );
}
