"use client";
import { BooksDetails } from "@/app/API/getbookDetails";
import { AuthorsList } from "@/app/API/allAuthorList";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bgauthor from "@/app/assests/image/authors-back.svg";
import aboutbookbg from "@/app/assests/image/aboutbookbg.png";
import inkdouble1 from "@/app/assests/image/inkdouble1.svg";
import inkdouble2 from "@/app/assests/image/inkdouble2.svg";
import BooksCards from "../BooksCards";
import SliderBook from "@/app/components/SliderBook";
import amazonimg from "@/app/assests/image/amazon.svg";
import flipkartimg from "@/app/assests/image/Flipkart.svg";
import Loader from "@/app/components/Loader";
import CurveBottom from "@/app/assests/image/aboutbookbg.png";
import CurveTop from "@/app/assests/image/aboutauthorbg.png";

// const testimonials = [
//   {
//     quote:
//       "Manogna Sastry has once again demonstrated her prowess as one of India’s finest historians. It's an experience that takes you through the depths of India's spiritual and historical landscapes.",
//     name: "Manogna Sastry",
//     designation: "Author",
//   },
//   {
//     quote:
//       "Manogna Sastry has once again demonstrated her prowess as one of India’s finest historians. It's an experience that takes you through the depths of India's spiritual and historical landscapes.",
//     name: "Manogna Sastry",
//     designation: "Author",
//   },
// ];

const Page = ({ params }) => {
  const { slug } = params;
  const bookInfo = BooksDetails.find((book) => book.slug === slug);

  if (!bookInfo) {
    return <div>Loading...</div>;
  }

  const authorsArray = Array.isArray(bookInfo.author)
    ? bookInfo.author
    : [bookInfo.author || "Unknown Author"];

  const noImageUrl = "https://via.placeholder.com/150?text=No+Image";

  const thumbnails = Array.isArray(bookInfo.book_thumbnail)
    ? bookInfo.book_thumbnail
    : [];

  // State to track current index and cloned slides logic
  const clonedThumbnails = [...thumbnails, ...thumbnails];

  // Authors details
  const [activeTab, setActiveTab] = useState(authorsArray[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  // copy Link
  const Tooltip = ({ message, show }) => {
    return (
      <div
        className={`absolute bg-gray-700 text-white text-xs rounded py-1 px-1 transition-opacity duration-100 ${
          show ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: "-20px", left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }}
      >
        {message}
      </div>
    );
  };

  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // Determine if section is in view
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // read more read less
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAuthExpanded, setIsAuthExpanded] = useState(false);
  const activeAuthor = AuthorsList.find(
    (author) => author.author_name === activeTab
  );
  const maxLength = 500;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const authortoggleExpand = () => {
    setIsAuthExpanded(!isAuthExpanded);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main id="top"  className="pt-10">
          <section className="relative overflow-hidden w-full z-[111]">
            <div className="slider-track flex items-center">
              {clonedThumbnails
                .concat(clonedThumbnails)
                .map((thumbnail, index) => (
                  <div
                    key={index}
                    className="flex-none slide_item h-[400px] object-cover"
                  >
                    <img
                      className="w-full object-cover"
                      src={thumbnail || noImageUrl}
                      alt={`Thumbnail ${index}`}
                      onError={(e) => {
                        e.target.src = noImageUrl;
                      }}
                    />
                  </div>
                ))}
            </div>
          </section>

          <style jsx>{`
            .slider-track {
              display: flex;
              animation: scroll 30s linear infinite;
            }

            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }

            .slide_item {
              min-width: 25%; /* Adjust based on how many items you want visible */
            }
          `}</style>

          {/* Main Book Information Section */}
          <div className="mx-auto max-w-5xl px-4 py-8 pb-0">
            <section
              id="book-detail"
              className="about_the_book_sec text-center pt-6"
            >
              <h1 className="text-4xl w-full lg:w-[75%] mx-auto font-medium mb-4">
                {bookInfo.title}
              </h1>
              <i>
                <h2 className="text-2xl text-[#007DD7] font-normal mb-2">
                  {authorsArray.join(", ")}
                </h2>
              </i>

              <div className="flex w-[30%] mx-auto pt-6">
                <div className="flex-1  font-barlow uppercase">{bookInfo.language}</div>
                <div className="flex-1 font-barlow uppercase">{bookInfo.book_format}</div>
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

              <div className="flex w-[50%] md:gap-6 gap-6 justify-center mx-auto pt-6">
                {bookInfo.amazonlink && (
                  <Link href={`${bookInfo.amazonlink}`} target="_blank">
                    <button className="bg-black rounded-full px-10 py-3 text-[#fff]">
                      <Image
                        src={amazonimg}
                        width={80}
                        height={80}
                        className="mt-1.5 max-w-full h-auto"
                      />
                    </button>
                  </Link>
                )}
                {bookInfo.flipkartlink && (
                  <Link href={`${bookInfo.flipkartlink}`}>
                    <button className="bg-[#007BD7] rounded-full px-10 py-4 text-[#fff]">
                      <Image src={flipkartimg} width={100} height={100} />
                    </button>
                  </Link>
                )}
              </div>

              {/* Copy Link Button */}
              <h6
                className="text-center font-barlow cursor-pointer underline text-[#0D1928] pt-6 mb-12 relative"
                onClick={copyLink}
              >
                {" "}
                Copy Page Link
                <Tooltip message="Copied!" show={copied} />
              </h6>
            </section>
          </div>
          {/* Endorement section */}
          {/* <div id="endorsements" className="wrapper bg-[#DDF5FF] w-full">
          <div className="container mx-auto p-10 pt-10">
            <SliderBook testimonials={testimonials} />
          </div>
        </div> */}

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
                <div className=" w-full pt-6 mb-6 pb-">
                  <h3 className="font-semibold text-3xl pb-4">
                    About the Book
                  </h3>
                  <p className="text-lg font-normal">
                    {isExpanded
                      ? bookInfo.about_book
                      : `${bookInfo.about_book.substring(0, maxLength)}...`}
                    <button
                      onClick={toggleExpand}
                      className="text-[#007DD7] font-medium ml-2"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </p>
                </div>

                {/* Book category */}
                <div className="flex w-full">
                  <h3 className="text-lg font-light">
                    Categories:{" "}
                    <em className="text-[#007DD7]">{bookInfo.category}</em>
                  </h3>
                </div>
              </div>
              <div className="curve_img"> 
                  <Image src={CurveBottom}></Image>
                </div>
            </div>
          </section>

          {/* About the Book Authour */}
          <section
            id="about-author"
            className="container mx-auto text-center py-10 pt-0 p-0 lg:w-[70%] lg:mx-auto"
          >
            <div className="about-author author-details-container mx-auto p-10 pt-5 rounded-2xl w-full lg:w-[85%] bg-[#FF81001A]">
              <div className="curve_img"> 
                  <Image src={CurveTop}></Image>
              </div>
              <div className="flex justify-center space-x-2 lg:space-x-4 mb-2">
                {authorsArray.map((authorName, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveTab(authorName)}
                    className="cursor-pointer z-[10]"
                  >
                    <img
                      src={
                        bookInfo.Authorimage && bookInfo.Authorimage[index]
                          ? bookInfo.Authorimage[index]
                          : noImageUrl
                      }
                      alt={authorName}
                      className={`rounded-full border-4 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] transition duration-200 ${
                        activeTab === authorName
                          ? "border-[#FF8100]"
                          : "border-[#f5f5f5]"
                      }`}
                      onError={(e) => {
                        e.target.src = noImageUrl;
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="lg:p-8  pt-10 mx-auto">
                <div className="relative cursor-pointer z-[10]">
                  <i>
                    <h3 className="font-medium text-3xl mb-4">{activeTab}</h3>
                  </i>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    {isAuthExpanded
                      ? activeAuthor?.authorDescription ||
                        "Description not available."
                      : `${activeAuthor?.authorDescription?.substring(
                          0,
                          500
                        )}...`}
                    <button
                      onClick={authortoggleExpand}
                      className="text-[#007DD7] font-medium ml-2"
                    >
                      {isAuthExpanded ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  <div className="w-full">
                    <Link
                      href={`/authors/${
                        bookInfo.author_slug[bookInfo.author.indexOf(activeTab)]
                      }`} // Get the slug based on activeTab
                      className="text-blue-500 underline"
                    >
                      <i>
                        <h6 className="text-[#007DD7] text-md">
                          Visit the Author Page
                        </h6>
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Other Books by the Same Author */}
          <section id="related-titles" className="container">
            <div className="flex items-center gap-2 justify-center pb-6 pt-6">
              <Image src={inkdouble1} width={55} height={55} alt="inkdouble1" />
              <i>
                <h3 className="font-medium text-2xl md:text-2xl text-center">
                  Related Titles
                </h3>
              </i>
              <Image src={inkdouble2} width={55} height={55} alt="inkdouble2" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6">
              {BooksDetails.filter((book) => {
                const bookGenres = book.genre
                  .toLowerCase()
                  .split(",")
                  .map((genre) => genre.trim()); // Split genres and remove extra spaces
                const currentBookGenres = bookInfo.genre
                  .toLowerCase()
                  .split(",")
                  .map((genre) => genre.trim());

      // Check if any of the genres of the current book match with the other books
      return bookGenres.some((genre) =>
        currentBookGenres.includes(genre)
      );
    })
    .slice(0, 6) // Limit to 6 related titles
    .map((filteredBook, i) => (
      <div key={i} className="p-4">
        <Link href={`./${filteredBook.slug}`} style={{ textDecoration: "none" }}>
          <BooksCards
            title={filteredBook.title}
            coverImage={filteredBook.book_image}
            bookPrice={`₹${filteredBook.price}`}
            authorName={filteredBook.author}
          />
        </Link>
      </div>
    ))}
  </div>
</section>


          <div className="bg-[#FF81001A] py-6 mt-6 flex justify-center">
            <div className="container flex gap-4 justify-center items-center">
              <div className="w-[60%] md:w-full flex-wrap md:flex md:justify-center mx-auto gap-2">
                <h6 className="font-medium">Other Specifications: </h6>
                <ul className="flex-wrap items-center space-x-6 md:flex">
                  <li className="md:list-none pl-6 md:pl-0">
                    ISBN10:{bookInfo.isbn10}
                  </li>
                  <li className="md:list-disc">ISBN13:{bookInfo.isbn13}</li>
                  <li className="md:list-disc">Weight:{bookInfo.weight}</li>
                  <li className="md:list-disc">
                    Dimensions:x{bookInfo.dimension}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div className="aside_fixed">
            <ul className="flex flex-col">
            <li>
                <a
                  href="#top"
                  className={`pb-2 ${
                    activeSection === "top"
                      ? "text-blue-500"
                      : "text-black"
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
                      ? "text-blue-500"
                      : "text-black"
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
                      ? "text-blue-500"
                      : "text-black"
                  }`}
                >
                  About the Author
                </a>
              </li>
              <li>
                <a
                  href="#related-titles"
                  className={`pb-2 ${
                    activeSection === "related-titles"
                      ? "text-blue-500"
                      : "text-black"
                  }`}
                >
                  Related Titles
                </a>
              </li>
            </ul>
          </div>
        </main>
      )}
    </>
  );
};

export default Page;
