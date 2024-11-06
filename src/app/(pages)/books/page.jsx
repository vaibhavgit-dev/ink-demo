"use client";
import { useState, useRef, useEffect } from "react";
import { BooksList } from "@/app/API/allBookList";
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
import { BooksDetails } from "@/app/API/getbookDetails";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";

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
  const filterRef = useRef(null);

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

  const booksPerPage = 15;
  const category = [...new Set(BooksDetails.map((book) => book.category))];
  const language = [...new Set(BooksDetails.map((book) => book.language))];
  const format = [...new Set(BooksDetails.map((book) => book.book_format))];
  const genre = [...new Set(BooksDetails.map((book) => book.genre))];
  const prices = [
    { label: "Under 399", range: [0, 399] },
    { label: "Between 400-599", range: [400, 599] },
    { label: "Above 600", range: [600, Infinity] },
  ];

  const getAuthorById = (authorId) => {
    return AuthorsList.find((author) => author.id === authorId);
  };

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

  const filteredBooks = BooksDetails.filter((book) => {
    const searchCondition =
    (book.title?.toLowerCase().includes(searchQuery.toLowerCase()) || "" ||
      book.author?.some((author) => author.toLowerCase().includes(searchQuery.toLowerCase())));

    const categoryCondition =
      categoryFilter.length === 0 || categoryFilter.includes(book.category);

    const genreCondition =
      genreFilter.length === 0 ||
      genreFilter.some((genre) => {
        const [category, subgenre] = genre.split(": ");
        return book.category === category && book.genre.includes(subgenre);
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

  filteredBooks.sort((a, b) => {
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

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const getCountByCategory = (category) => {
    return BooksDetails.filter((book) => book.category === category).length;
  };

  const getCountByLanguage = (language) => {
    return BooksDetails.filter((book) => book.language === language).length;
  };

  const getCountByFormat = (format) => {
    return BooksDetails.filter((book) => book.book_format === format).length;
  };

  const getCountByPriceRange = (range) => {
    return BooksDetails.filter(
      (book) => book.price >= range[0] && book.price <= range[1]
    ).length;
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="flex flex-col h-full pb-20 mx-auto top_bg_gradient">
          <HelmetProvider>
  <Helmet>
    <title>All Books | BluOne Ink Publishing</title>
    <meta name="description" content="Fiction, Non-fiction, and Children books published in Hardcover, Paperback, and eBook formats, in English, Hindi, Rajasthani, Bengali, Marathi and Telugu." />
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
                            <div className="w-full ">
                              <label
                                key={lang}
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
                          {format.map((lang) => (
                            <div className="w-full">
                              <label
                                key={lang}
                                className={`text-md pt-1 flex place-items-center text-[#0D1928] font-normal ${
                                  formatFilter.includes(lang)
                                    ? "font-semibold"
                                    : "font-normal"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  value={lang}
                                  checked={formatFilter.includes(lang)}
                                  onChange={() =>
                                    handleFilterChange(
                                      formatFilter,
                                      setFormatFilter,
                                      lang
                                    )
                                  }
                                />{" "}
                                <span className="ml-2 font-ibm">
                                  {lang} ({getCountByFormat(lang)})
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
                  const author = getAuthorById(book.author);
                  return (
                    <div
                      key={book.id}
                      className="p-4 mb-4 hover:shadow-md input-border border-[#ffffff00] hover:border-[#BABABA] rounded-md"
                    >
                      <Link
                        href={`./books/${book.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <BooksCards
                          title={book.title}
                          coverImage={book.book_image}
                          bookPrice={book.price ? `₹${book.price}` : ''}
                          authorName={book.author ? book.author : "No Author"}
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

            {currentBooks.length > 0 && (
              <div className="w-full flex-wrap md:flex justify-center md:justify-between pt-4">
                <div className="flex justify-center md:justify-between">
                  <i>
                    <p>
                      Showing {indexOfFirstBook + 1}-{""}
                      {Math.min(indexOfLastBook, filteredBooks.length)} of{" "}
                      {filteredBooks.length} Books
                    </p>
                  </i>
                </div>

                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 items-center">
                  {currentPage > 1 && (
                    <button
                      onClick={() => {
                        setCurrentPage((prev) => prev - 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="p-2 mx-2 flex items-center text-[#241b6d] hover:rounded-md hover:text-[#241b6d]"
                    >
                      <MdOutlineArrowLeft className="w-6 h-6" />
                    </button>
                  )}

                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrentPage(i + 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`p-1 px-2.5 py-0 text-lg font-medium font-barlow text-[#8A8A8A] rounded-full  ${
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
                      onClick={() => {
                        setCurrentPage((prev) => prev + 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="p-2 mx-2 flex items-center text-[#241b6d] hover:rounded-md hover:text-[#241b6d]"
                    >
                      <MdOutlineArrowRight className="text-[#241b6d] w-6 h-6" />
                    </button>
                  )}
                </div>
                )}
              </div>
            )}

            {currentBooks.length === 0 && currentPage > 1 && (
              <div className="pt-4">
                <p>Redirecting to page 1...</p>
                {setCurrentPage(1)}
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
}
