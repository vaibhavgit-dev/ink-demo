"use client";
import { useEffect, useState } from "react";
import { fetchBookBySlug, processBookData } from "@/app/API/booksapi";
import { getAllAuthors } from "@/app/API/allAuthorList";
import Image from "next/image";
import Link from "next/link";
import inkdouble1 from "@/app/assests/image/inkdouble1.svg";
import inkdouble2 from "@/app/assests/image/inkdouble2.svg";
import BooksCards from "../BooksCards";
import SliderBook from "@/app/components/SliderBook";
import Loader from "@/app/components/Loader";
import CurveBottom from "@/app/assests/image/aboutbookbg.png";
import CurveTop from "@/app/assests/image/aboutauthorbg.png";
import { HelmetProvider, Helmet } from "react-helmet-async";
import SmoothScrollSlider from "./slide";
import ScriptLoader from "@/app/ScriptLoader";
import Select from 'react-select';
import { useRouter } from "next/navigation"; 
import { AiFillCaretDown } from "react-icons/ai";

const Page = ({ params }) => {
  const router = useRouter();
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  
  // All state declarations
  const [bookInfo, setBookInfo] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAuthExpanded, setIsAuthExpanded] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [activeAuthor, setActiveAuthor] = useState(null);
  const [activeAuthorDetails, setActiveAuthorDetails] = useState(null);

  // All effects
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // Remove ISBN from slug if present
        const cleanSlug = decodedSlug.replace(/-\d{13}$/, '');
        const bookData = await fetchBookBySlug(cleanSlug);
        console.log('Raw book data:', bookData); // Debug raw data
        
        if (!bookData) {
          throw new Error("Book not found");
        }

        // Process authors and writers
        const allAuthors = [
          bookData.author,
          ...(bookData.writers || [])
        ].filter(Boolean).map(author => ({
          id: author.id,
          author_name: author.name,
          authslug: author.slug,
          image: author.imageUrl,
          authorDescription: author.description,
          authorSocial: author.socialMedia ? 
            (typeof author.socialMedia === 'string' ? JSON.parse(author.socialMedia) : author.socialMedia) 
            : {}
        }));

        // Process categories and genres into strings for backward compatibility
        const categoryNames = [
          bookData.category,
          ...(bookData.additionalCategories || [])
        ].filter(Boolean).map(cat => cat.name).join(', ');

        const genreNames = [
          bookData.genre,
          ...(bookData.additionalGenres || [])
        ].filter(Boolean).map(gen => gen.name).join(', ');

        // Create processed book data with combined information
        const processedBook = {
          ...processBookData(bookData),
          author: allAuthors[0] || null,
          authors: allAuthors,
          category: categoryNames,
          genre: genreNames,
          categories: bookData.category ? [bookData.category, ...(bookData.additionalCategories || [])] : [],
          genres: bookData.genre ? [bookData.genre, ...(bookData.additionalGenres || [])] : []
        };

        console.log('Processed book data:', processedBook); // Debug processed data
        setBookInfo(processedBook);
        
        // Set activeTab when book data is available
        if (processedBook.author) {
          setActiveTab(processedBook.author.author_name);
        }
        
        // Set the initial active author details
        if (processedBook.authors && processedBook.authors.length > 0) {
          setActiveAuthorDetails(processedBook.authors[0]); // Set the first author as active initially
        } else if (processedBook.author) {
           setActiveAuthorDetails(processedBook.author); // Fallback to main author if authors array is empty
        } else {
           setActiveAuthorDetails(null); // No author data
        }
        
        // Update the authorsArray to include all authors
        const authorsArray = allAuthors.map(author => ({
          name: author.author_name,
          slug: author.authslug
        }));

        // Fetch related books
        const relatedResponse = await fetch(`https://dashboard.bluone.ink/api/public/books`);
        if (relatedResponse.ok) {
          const allBooks = await relatedResponse.json();
          const processedBooks = allBooks.map(book => processBookData(book));
          
          if (processedBook.genre) {
            const filteredBooks = processedBooks.filter(book => {
              if (book.slug === processedBook.slug) return false;
              
              const bookGenres = book.genre?.toLowerCase()?.split(",")?.map(g => g.trim()) || [];
              const currentBookGenres = processedBook.genre?.toLowerCase()?.split(",")?.map(g => g.trim()) || [];
              
              return bookGenres.some(genre => currentBookGenres.includes(genre));
            });
            
            setRelatedBooks(filteredBooks.slice(0, 6));
          }
        }
        
        setError(null);
      } catch (err) {
        console.error("Error fetching book details:", err);
        setError("Failed to load book details. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    if (decodedSlug) {
      fetchData();
    }
  }, [decodedSlug]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const authorsList = await getAllAuthors();
        setAuthors(authorsList);
        if (authorsList.length > 0) {
          setActiveAuthor(authorsList.find(
            (author) => author.author_name === activeTab
          ) || authorsList[0]);
        }
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, [activeTab]);

  // Early returns
  if (loading) {
    return <Loader />;
  }

  if (error || !bookInfo) {
    return <div className="container mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Error</h2>
      <p>{error || "Book not found"}</p>
      <Link href="/books" className="text-blue-500 underline mt-4 inline-block">
        Return to Books
      </Link>
    </div>;
  }

  // Data processing after early returns
  const noImageUrl = "";
  const authorimgurl = "/author-defaultimages.png";
  
  // Process book images
  const processImageUrl = (url) => {
    if (!url) return '';
    return url.replace(/[\[\]"]/g, '').trim();
  };

  const thumbnails = Array.isArray(bookInfo.book_thumbnail)
    ? bookInfo.book_thumbnail.map(processImageUrl)
    : typeof bookInfo.book_thumbnail === 'string'
      ? [processImageUrl(bookInfo.book_thumbnail)]
      : [];

  const clonedThumbnails = [...thumbnails, ...thumbnails].filter(Boolean);

  // Process authors
  let authorNames = [];
  if (bookInfo.authors && Array.isArray(bookInfo.authors)) {
    authorNames = bookInfo.authors.map(author => author.author_name);
  } else if (bookInfo.author) {
    authorNames = [bookInfo.author.author_name];
  } else {
    authorNames = ["Unknown Author"];
  }

  const pageTitle = `${bookInfo.title} by ${authorNames.join(', ')} | BluOne Ink Book`;
  const pageDescription = bookInfo.meta_description;
  const canonicalUrl = `https://www.bluone.ink/books/${slug}`;

  // copy Link
  const Tooltip = ({ message, show }) => {
    return (
      <div
        className={`absolute bg-gray-700 text-white text-xs rounded py-1 px-1 transition-opacity duration-100 ${
          show ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: "28px",
          left: "200px",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      >
        {message}
      </div>
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // read more read less
  const maxLength = 500;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const authortoggleExpand = () => {
    setIsAuthExpanded(!isAuthExpanded);
  };

  // Generate language options dynamically from relatedBooks
  const languageOptions = [
    { label: bookInfo.language, value: bookInfo.slug } // Current book's language
    // Additional languages would be added here if available
  ];

  // Generate format options
  const formatOptions = Array.isArray(bookInfo.book_format)
    ? bookInfo.book_format.map((format) => ({
        label: format,
        value: format.toLowerCase(),
      }))
    : bookInfo.book_format
    ? [{ label: bookInfo.book_format, value: bookInfo.book_format.toLowerCase() }]
    : [];

  // Handle language change
  const handleLanguageChange = (selectedOption) => {
    router.push(`/books/${selectedOption.value}`); // Redirect to the selected book page
  };

  const handleFormatChange = (selectedOption) => {
    if (!selectedOption || !selectedOption.value) {
      return;
    }
    setSelectedFormat(selectedOption);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "20px",
      border: "1px solid #0D1928",
      padding: "4px 10px",
      minHeight: "unset",
      "&:hover": {
        border: "1px solid #0D1928",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0px 6px",
    }),
    singleValue: (provided) => ({
      ...provided,
      fontWeight: "medium",
      fontSize: "16px",
      textTransform: "uppercase",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "0 4px",
      color: "#0D1928", // Icon color same as text
    }),
    indicatorSeparator: () => ({
      display: "none", // Remove separator line
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      marginTop: "5px",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "5px 0",
      background: "#fff",
      borderRadius: "10px",
    }),
    option: (provided, state) => ({
      ...provided,
      padding: "10px 12px",
      fontSize: "14px",
      fontWeight: "medium",
      textTransform: "uppercase",
      cursor: "pointer",
      background: state.isSelected ? "#eaeaea" : "transparent",
      color: "#000",
      "&:hover": {
        background: "#007dd7",
        color: "#fff",
      },
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      <div {...props.innerRef} style={{ paddingRight: "6px", display: "flex", alignItems: "center" }}>
        <AiFillCaretDown size={12} />
      </div>
    );
  };

  return (
    <>
      <main id="top">
        <HelmetProvider>
          <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <link rel="canonical" href={canonicalUrl} />
          </Helmet>
        </HelmetProvider>

        <ScriptLoader />

        {clonedThumbnails && clonedThumbnails.length > 0 && (
          <SmoothScrollSlider clonedThumbnails={clonedThumbnails} />
        )}

        {/* Main Book Information Section */}
        <section className="w-full relative z-[1000] bg-white">
          <div className="mx-auto max-w-5xl px-4 pt-8 pb-8">
            <section
              id="book-detail"
              className="about_the_book_sec text-center pt-6"
            >
              <h1 className="text-[28px] lg:text-4xl w-full lg:w-[75%] mx-auto font-medium mb-4">
                {bookInfo.title}
              </h1>
              <i>
              <div className="flex justify-center font-ibm">
              {authorNames.map((author, index) => (
                <div key={index}>
                  <Link
                    href={`/authors/${bookInfo.author?.authslug || ""}`}
                    className="text-[20px] text-[#007DD7]"
                  >  
                  {author}
                   
                  </Link> 
                  {index < authorNames.length - 1 && <span>{", "}</span>}
                </div>
              ))}
              </div>
              </i>

              <div className="flex w-[80%] justify-center lg:w-[35%] gap-6 lg:gap-10 mx-auto pt-6">

                {/* Language Dropdown */}
                  {languageOptions.length > 1 ? (
                    <Select
                      options={languageOptions}
                      className="font-barlow uppercase cursor-pointer w-32"
                      styles={customStyles}
                      defaultValue={languageOptions.find((opt) => opt.label === bookInfo.language)}
                      isSearchable={false}
                      onChange={handleLanguageChange}
                      components={{ DropdownIndicator }} // Custom Icon
                    />
                  ) : (
                    <span className="font-barlow flex items-center uppercase border border-[#000] rounded-full px-6 py-1">{languageOptions[0]?.label}</span>
                  )}

                  {/* Format Dropdown */}
                  {formatOptions.length > 1 ? (
                    <Select
                      options={formatOptions}
                      className="font-barlow uppercase cursor-pointer w-32"
                      styles={customStyles}
                      defaultValue={formatOptions[0]}
                      isSearchable={false}
                      onChange={handleFormatChange}
                      components={{ DropdownIndicator }} // Custom Icon
                    />
                  ) : (
                    <span className="font-barlow flex items-center uppercase border border-[#000] rounded-full px-6 py-1">{formatOptions[0]?.label}</span>
                  )}
               </div>

              <div className="flex md:w-[50%] gap-3 md:mx-auto pt-6">
                <div className="flex-1">
                  <h3>{bookInfo.publish_year}</h3>
                  <p className="font-barlow">PUBLISHED</p>
                </div>
                <div className="flex-1">
                  <h3>{bookInfo.pages}</h3>
                  <p className="font-barlow">PAGES</p>
                </div>

                <div className="flex-1">
                  <h3>₹{bookInfo.price}</h3>
                  <p className="font-barlow">PRICE</p>
                </div>
              </div>

              <div
                className={`flex ${(() => {
                  const activeButtons = [
                    bookInfo.amazonlink,
                    bookInfo.amazon_comlink,
                    bookInfo.flipkartlink,
                    bookInfo.preorder,
                    bookInfo.downloadaisheet,
                  ].filter(Boolean).length;

                  if (activeButtons === 3) return "lg:w-[70%]";
                  if (activeButtons > 3) return "w-full flex-wrap";
                  return "lg:w-[50%]";
                })()} md:gap-6 gap-4 justify-center mx-auto pt-6`}
              >
                {bookInfo.amazonlink && (
                  <Link href={`${bookInfo.amazonlink}`} target="_blank">
                    <button className="">
                      <Image
                        src="/amazon_in.png"
                        width={178}
                        height={178}
                        className="max-w-full h-auto"
                      />
                    </button>
                  </Link>
                )}
                {bookInfo.amazon_comlink && (
                  <Link href={`${bookInfo.amazon_comlink}`} target="_blank">
                    <button className="">
                      <Image
                        src="/amazon_com.png"
                        width={195}
                        height={195}
                        className="max-w-full h-auto"
                      />
                    </button>
                  </Link>
                )}
                {bookInfo.flipkartlink && (
                  <Link href={`${bookInfo.flipkartlink}`} target="_blank">
                    <button className="">
                      <Image src="/flipkart.png" width={180} height={180} />
                    </button>
                  </Link>
                )}
                {(bookInfo.preorder || bookInfo.orderbtn) && (
                  <div className="text-center">
                    <Link
                      href={
                        new Date() < new Date(bookInfo.preorderdate)
                          ? bookInfo.preorder
                          : bookInfo.orderbtn || bookInfo.preorder
                      }
                      target="_blank"
                    >
                      <button className="bg-[#FF8100] rounded-full px-10 py-3.5 font-barlow text-[#fff]">
                        <h6 className="font-semibold text-[16px] lg:text-[18px]">
                          {new Date().toISOString().split("T")[0] < bookInfo.preorderdate
                            ? "PRE-ORDER"
                            : "ORDER NOW"}
                        </h6>
                      </button>
                    </Link>

                    {/* Preorder text will only show if the button text is "PRE-ORDER" */}
                    {new Date().toISOString().split("T")[0] < bookInfo.preorderdate &&
                      bookInfo.preordertext && (
                        <p className="mt-1 text-[12px] font-barlow">{bookInfo.preordertext}</p>
                      )}
                  </div>
                )}
                {bookInfo.downloadaisheet && (
                  <Link href={`${bookInfo.downloadaisheet}`} target="_blank">
                    <button className="bg-white border-2 border-[#FF8100] rounded-full px-10 py-3 font-barlow text-[#000]">
                      <h6 className="font-semibold text-[18px]">Preview Sample</h6>
                    </button>
                  </Link>
                )}
              </div>

              {/* Copy Link Button */}
              <h6
                className="text-center w-[50%] lg:w-[15%]  pt-6 m-auto font-barlow cursor-pointer underline text-[#0D1928] pt-6 mb-4 relative"
                onClick={copyLink}
              >
                {" "}
                Copy Page Link
                <Tooltip message="Copied!" show={copied} />
              </h6>
            </section>
          </div>
        </section>

        {/* About the Book */}
        <section
          id="about-book"
          className="container pt-2 p-0 lg:w-[70%] lg:mx-auto"
        >
          <div className="about-book author-details-container mx-auto p-10 rounded-2xl w-full lg:w-[85%] bg-[#FF81001A]">
            <div
              className="text-center"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div className="w-full pt-6 mb-6">
                <h3 className="font-semibold text-3xl pb-4">
                  About the Book
                </h3>
                <p className="text-lg text-start font-normal book-info-html">
                  <span
                    className="font-ibm"
                    dangerouslySetInnerHTML={{
                      __html: isExpanded
                        ? bookInfo.about_book
                        : `${bookInfo.about_book?.substring(0, maxLength)} `,
                    }}
                  ></span>
                  {bookInfo.about_book && bookInfo.about_book.length > maxLength && (
                    <button
                      onClick={toggleExpand}
                      className="text-[#0D1928] underline font-medium inline"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </p>
              </div>
              {/* Book category */}
              <div className="flex w-full">
                <i>
                  <h3 className="text-lg font-normal">
                    {`Category: `}{" "}
                    <em className="text-[#007DD7]">{bookInfo.genre}</em>
                  </h3>
                </i>
              </div>
            </div>
            <div className="curve_img">
              <Image src={CurveBottom} alt="Curved Bottom Decoration" />
            </div>
          </div>
        </section>

        {/* About the Book Author */}
       {activeAuthorDetails && activeAuthorDetails.author_name !== "Bluone Ink" && bookInfo.authors && bookInfo.authors.length > 0 && (
  <section
    id="about-author"
    className="container mx-auto text-center py-10 pt-0 p-0 lg:w-[70%] lg:mx-auto"
  >
    <div className="about-author author-details-container mx-auto p-10 pt-5 rounded-2xl w-full lg:w-[85%] bg-[#FF81001A]">
      <div className="curve_img">
        <Image src={CurveTop} alt="Curve Top" />
      </div>
      {/* Display images for all authors */}
      <div className="flex justify-center space-x-2 lg:space-x-4 mb-2">
        {bookInfo.authors.map((author, index) => (
          <div 
            key={index} 
            className={`cursor-pointer z-[10] ${activeAuthorDetails?.id === author.id ? 'border-[#007DD7] border-4 rounded-full' : 'opacity-80 grayscale'}`}
            onClick={() => {
              setActiveAuthorDetails(author);
              setIsAuthExpanded(false); // Collapse description when switching author
            }}
          >
            <img
              src={author.image || authorimgurl}
              alt={author.author_name}
              className="rounded-full w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover transition duration-200"
              onError={(e) => {
                e.currentTarget.src = authorimgurl;
              }}
            />
          </div>
        ))}
      </div>

      <div className="lg:p-8 pt-10 mx-auto">
        <div className="relative z-[10]">
          <i>
            <h3 className="font-medium text-3xl mb-4">
              {/* Display active author name */}
              {activeAuthorDetails?.author_name}
            </h3>
          </i>
          <p className="text-gray-700 text-start mb-4 text-lg leading-relaxed">
            {isAuthExpanded
              ? activeAuthorDetails?.authorDescription || "Description not available."
              : `${activeAuthorDetails?.authorDescription?.substring(0, 600) || ""}`}
            {activeAuthorDetails?.authorDescription &&
              activeAuthorDetails.authorDescription.length > 600 && (
                <button
                  onClick={() => setIsAuthExpanded(!isAuthExpanded)}
                  className="text-[#0D1928] underline font-medium ml-2"
                >
                  {isAuthExpanded ? "Read Less" : "Read More"}
                </button>
              )}
          </p>
          {/* Author's Social Media Links for active author */}
          {activeAuthorDetails?.authorSocial && Object.keys(activeAuthorDetails.authorSocial).length > 0 && (
            <ul className="list-disc flex flex-wrap justify-center gap-6 pb-6">
                {Object.entries(activeAuthorDetails.authorSocial).map(([platform, url], index) => {
                  let platformName = platform;
                  // Basic mapping for common platforms, you can expand this
                  if (platform === 'x') platformName = 'X (Twitter)';
                  else if (platform === 'linkedin') platformName = 'LinkedIn';
                  else if (platform === 'facebook') platformName = 'Facebook';
                  else if (platform === 'instagram') platformName = 'Instagram';
                  else if (platform === 'youtube') platformName = 'YouTube';

                  return (
                    <li
                      key={index}
                      className="list-none hover:underline hover:text-[#007DD7]"
                    >
                      <a
                        href={`${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {platformName.charAt(0).toUpperCase() + platformName.slice(1)}
                      </a>
                    </li>
                  );
                })}
              </ul>
          )}

          <div className="w-full">
            <h6 className="text-[#007DD7] text-md">
              {/* Link to active author's page */}
              {activeAuthorDetails?.authslug && (
                <Link
                  href={`/authors/${activeAuthorDetails.authslug}`}
                  className="text-blue-500 underline"
                >
                  Visit the Author Page
                </Link>
              )}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
)}



        {/* Endorsement section */}
        <section id="endorsements">
          {bookInfo.testimonials && bookInfo.testimonials.length > 0 && (
            <div className="wrapper bg-[#DDF5FF] w-full mt-14 mb-14">
              <div className="container mx-auto p-10 pt-10">
                <SliderBook testimonials={bookInfo.testimonials} />
              </div>
            </div>
          )}
        </section>

        {/* Press Coverage section */}
        <section id="press-coverage">
          {bookInfo.pressCoverage && (
            <div className="wrapper bg-white w-full mt-14 mb-14">
              <div className="container mx-auto p-10 pt-10">
                <div className="flex items-center gap-2 justify-center pb-2">
                  <Image src={inkdouble1} width={55} height={55} alt="inkdouble1" />
                  <i>
                    <h3 className="font-medium text-2xl md:text-2xl text-center">
                      Press Coverage
                    </h3>
                  </i>
                  <Image src={inkdouble2} width={55} height={55} alt="inkdouble2" />
                </div>
                <div 
                  className="mt-8 prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: bookInfo.pressCoverage
                      .replace(/&lt;/g, '<')
                      .replace(/&gt;/g, '>')
                      .replace(/&quot;/g, '"')
                      .replace(/&amp;/g, '&')
                      .replace(/\\"/g, '"')
                      .replace(/\\\\/g, '\\')
                  }} 
                />
              </div>
            </div>
          )}
        </section>

        {/* Spotlight section */}
        <section id="spotlight">
          {bookInfo.spotlight && bookInfo.spotlight.length > 0 && (
            <div className="wrapper bg-[#FFF5EB] w-full mt-14 mb-14">
              <div className="container mx-auto p-10 pt-10">
                <div className="flex items-center gap-2 justify-center pb-8">
                  <Image src={inkdouble1} width={55} height={55} alt="inkdouble1" />
                  <i>
                    <h3 className="font-medium text-2xl md:text-2xl text-center">
                      Spotlight
                    </h3>
                  </i>
                  <Image src={inkdouble2} width={55} height={55} alt="inkdouble2" />
                </div>

                {/* Featured Media */}
                {bookInfo.spotlight[0] && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="relative aspect-video">
                      {bookInfo.spotlight[0].type === 'video' ? (
                        <iframe
                          src={bookInfo.spotlight[0].videoUrl}
                          className="absolute inset-0 w-full h-full rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <Image
                          src={bookInfo.spotlight[0].imageUrl || bookInfo.spotlight[0].thumbnailUrl}
                          alt={bookInfo.spotlight[0].title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      )}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-xl font-semibold mb-4">{bookInfo.spotlight[0].title}</h4>
                      <p className="text-gray-700">{bookInfo.spotlight[0].description}</p>
                    </div>
                  </div>
                )}

                {/* Media Grid */}
                {bookInfo.spotlight.length > 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {bookInfo.spotlight.slice(1).map((media, index) => (
                      <div key={index} className="relative">
                        <div className="relative aspect-video mb-2">
                          {media.type === 'video' ? (
                            <iframe
                              src={media.videoUrl}
                              className="absolute inset-0 w-full h-full rounded-lg"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <Image
                              src={media.imageUrl || media.thumbnailUrl}
                              alt={media.title}
                              fill
                              className="object-cover rounded-lg"
                            />
                          )}
                          {media.type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                              </div>
                            </div>
                          )}
                        </div>
                        <h5 className="text-sm font-medium line-clamp-2">{media.title}</h5>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        {/* Related Books */}
        <section id="related-titles" className="container">
          <div className="flex items-center gap-2 justify-center pb-2 pt-6">
            <Image src={inkdouble1} width={55} height={55} alt="inkdouble1" />
            <i>
              <h3 className="font-medium text-2xl md:text-2xl text-center">
                Related Titles
              </h3>
            </i>
            <Image src={inkdouble2} width={55} height={55} alt="inkdouble2" />
          </div>
          <div className="flex items-center justify-center pb-6">
            <Link href="/books">
              <i>
                <h4 className="text-[#007DD7] text-base underline font-medium">
                  View All Titles
                </h4>
              </i>
            </Link>
          </div>
          <div
            className={`related_title_sec flex flex-wrap ${
              relatedBooks.length < 1 ? "justify-between" : "justify-center"
            }`}
          >
            {relatedBooks.map((relatedBook, i) => (
              <div
                key={i}
                className="related_title_sec_card flex-1 p-4 mb-4 hover:shadow-md input-border border-[#ffffff00] hover:border-[#BABABA] rounded-md"
                style={{ maxWidth: "200px" }}
              >
                <Link
                  href={`/books/${relatedBook.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <BooksCards
                    title={relatedBook.title}
                    coverImage={Array.isArray(relatedBook.book_image) 
                      ? relatedBook.book_image[0]?.replace(/[\[\]"]/g, '') 
                      : typeof relatedBook.book_image === 'string' 
                        ? relatedBook.book_image.replace(/[\[\]"]/g, '')
                        : ''} 
                    bookPrice={`₹${relatedBook.price}`}
                    authorName={relatedBook.author?.author_name || (Array.isArray(relatedBook.author) ? relatedBook.author.join(', ') : relatedBook.author)}
                    imageContainerClass={`h-[200px] lg:h-[250px]`}
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>
        <div className="bg-[#FF81001A] pt-4 pb-4 mt-20 flex justify-center">
          <div className="container flex gap-4 justify-center items-center">
            <div className="w-[60%] md:w-full flex-wrap md:flex md:justify-center mx-auto gap-2">
              <h6 className="font-medium text-center">
                Other Specifications:{" "}
              </h6>
              <ul className="flex-wrap items-center space-x-6 md:flex">
                <li className="md:list-none pl-6 md:pl-0">
                  ISBN: {bookInfo.isbn13}
                </li>
                <li className="md:list-disc">Weight: {bookInfo.weight}</li>
                <li className="md:list-disc">
                  Dimensions: {bookInfo.dimension}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="hidden lg:block aside_fixed">
          <ul className="flex flex-col">
            <li>
              <a
                href="#top"
                className={`pb-2 ${
                  activeSection === "top"
                    ? "text-[#007BD7] font-medium"
                    : "text-[#0D1928] font-light"
                }`}
              >
                Go to Top
              </a>
            </li>
            <li>&nbsp;</li>
            <li>
              <a
                href="#about-book"
                className={`pb-2 ${
                  activeSection === "about-book"
                    ? "text-[#007BD7] font-medium"
                    : "text-[#0D1928] font-light"
                }`}
              >
                About the Book
              </a>
            </li>
            <li>
              <a
                href="#about-author"
                className={`pb-2 ${
                  activeSection === "about-author"
                    ? "text-[#007BD7] font-medium"
                    : "text-[#0D1928] font-light"
                }`}
              >
                About the Author
              </a>
            </li>
            {bookInfo.testimonials && bookInfo.testimonials.length > 0 && (
              <li>
                <a
                  href="#endorsements"
                  className={`pb-2 ${
                    activeSection === "endorsements"
                      ? "text-[#007BD7] font-medium"
                      : "text-[#0D1928] font-light"
                  }`}
                >
                  Endorsements
                </a>
              </li>
            )}
            {bookInfo.pressCoverage && (
              <li>
                <a
                  href="#press-coverage"
                  className={`pb-2 ${
                    activeSection === "press-coverage"
                      ? "text-[#007BD7] font-medium"
                      : "text-[#0D1928] font-light"
                  }`}
                >
                  Press Coverage
                </a>
              </li>
            )}
            {bookInfo.spotlight && bookInfo.spotlight.length > 0 && (
              <li>
                <a
                  href="#spotlight"
                  className={`pb-2 ${
                    activeSection === "spotlight"
                      ? "text-[#007BD7] font-medium"
                      : "text-[#0D1928] font-light"
                  }`}
                >
                  Spotlight
                </a>
              </li>
            )}
            <li>
              <a
                href="#related-titles"
                className={`pb-2 ${
                  activeSection === "related-titles"
                    ? "text-[#007BD7] font-medium"
                    : "text-[#0D1928] font-light"
                }`}
              >
                Related Titles
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Page;
