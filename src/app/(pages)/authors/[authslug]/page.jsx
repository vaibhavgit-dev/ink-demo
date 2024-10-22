"use client";
import { useState, useEffect } from "react";
import { AuthorsList } from "@/app/API/allAuthorList";
import { BooksList } from "@/app/API/allBookList";
import inkdouble1 from "@/app/assests/image/inkdouble1.svg";
import inkdouble2 from "@/app/assests/image/inkdouble2.svg";
import Image from "next/image";
import BooksCards from "../../books/BooksCards";
import bgauthor from "@/app/assests/image/authors-back.svg";
import Loader from "@/app/components/Loader";
import Link from "next/link";
import { BooksDetails } from "@/app/API/getbookDetails";
import AuthorBooksCards from "../authorBooksCards";
import { Helmet } from "react-helmet";

const Page = ({ params }) => {
  const { authslug } = params;

  // Find the author using the slug
  const authorInfo = AuthorsList.find((author) => author.authslug === authslug);

  if (!authorInfo) {
    return <div>Loading...</div>;
  }

  // list of book authors
  const authorBooks = BooksDetails.filter((book) => {
    const bookAuthorsArray = Array.isArray(book.author)
      ? book.author
      : [book.author];

    return (
      bookAuthorsArray.includes(authorInfo.author_name) &&
      book.slug !== authorInfo.slug
    );
  });

  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // copy Link
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Meta title and description
  const pageTitle = `${authorInfo.author_name} | BluOne Ink Author`;
  const pageDescription = `Ink Author`;

  // Short and full description logic with a check for 80 words
  const descriptionWords = authorInfo.authorDescription.split(" ");
  const shortDescription =
    descriptionWords.slice(0, 80).join(" ") +
    (descriptionWords.length > 80 ? "" : "");
  const fullDescription = authorInfo.authorDescription;

  // Loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const defaultImage = "/author-defaultimages.png";

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="wrapper pt-0 pb-10">
        <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        </Helmet>
          {/* Page Container */}
          <div className="container pt-20">
            <div className="relative pb-20">
              <div className="absolute top-0 left-0 right-0 pb-20 z-[10]">
                <img
                  className="m-auto p-1 aspect-square object-cover border-2 border-dashed border-[#241B6D] rounded-full"
                  src={authorInfo.image || defaultImage}
                  alt="Author"
                  width={300}
                  height={250}
                />
              </div>
            </div>

            {/* Author Details Section */}
            <div
              className="author-details-container mx-auto p-10 rounded-2xl w-full lg:w-[65%] bg-cover bg-center mt-20"
              style={{ position: "relative" }}
            >
              <Image
                src={bgauthor}
                alt="Background"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                borderRadius="30px"
              />
              <div
                className="text-center"
                style={{ position: "relative", zIndex: 1 }}
              >
                <h4 className="mt-20 pt-10 text-4xl mb-5">
                  {authorInfo.author_name}
                </h4>

                {/* Conditionally render description */}
                <p className="text-start pt-4 pb-4 ">
                  {isExpanded ? fullDescription : shortDescription}
                  &nbsp;
                  {descriptionWords.length > 80 && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-[#0D1928] underline font-medium focus:outline-none"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </p>

                {/* Author's Social Media Links */}
                <ul className="list-disc flex flex-wrap justify-center gap-6 pb-6">
                  {authorInfo.authorSocial.map((social, index) => {
                    let platformName = "";
                    if (social.includes("linkedin")) platformName = "LinkedIn";
                    else if (social.includes("facebook"))
                      platformName = "Facebook";
                    else if (social.includes("instagram"))
                      platformName = "Instagram";
                    else if (social.includes("youtube"))
                      platformName = "YouTube";
                    else if (
                      social.includes("twitter") ||
                      social.includes("x.com")
                    )
                      platformName = "X (Twitter)";
                    else platformName = social.split(".")[0];

                    return (
                      <li
                        key={index}
                        className="list-none hover:underline hover:text-[#007DD7]"
                      >
                        <a
                          href={`${social}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {platformName}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                {/* Copy Link Button */}
                {/* <i>
                  <p
                    className="text-center text-[lg] cursor-pointer underline text-[#007DD7]"
                    onClick={//copyLink}
                  >
                    {" "}
                    Send a message to the Author
                  </p>
                </i> */}
              </div>
            </div>

            {/* Author's Books Section */}
            <div className="books-section w-full pt-20">
              <div className="flex items-center gap-2 justify-center pb-6 pt-6">
                <Image
                  src={inkdouble1}
                  width={55}
                  height={55}
                  alt="inkdouble1"
                />
                <i>
                  <h3 className="font-semibold text-base md:text-3xl text-center">
                  {authorBooks.length >= 2
                  ? `${authorInfo.author_name}’s books published by BluOne Ink`
                  : `${authorInfo.author_name}’s book published by BluOne Ink`}
                  </h3>
                </i>
                <Image
                  src={inkdouble2}
                  width={55}
                  height={55}
                  alt="inkdouble2"
                />
              </div>
              <div
                className={`wrapper mt-12 flex flex-wrap ${
                  authorBooks.length < 4 ? "justify-center" : ""
                }`}
              >
                {authorBooks.length > 0 ? (
                  authorBooks.slice(0, 4).map((book, i) => (
                    <div
                      key={i}
                      className={`p-4 flex-none mb-4 hover:shadow-md input-border border-[#ffffff00] hover:border-[#BABABA] rounded-md ${
                        authorBooks.length < 4
                          ? "md:w-1/2 lg:w-1/4"
                          : "md:w-1/2 lg:w-1/4"
                      } `}
                    >
                      <Link
                        href={`/books/${book.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <AuthorBooksCards
                          title={book.title}
                          coverImage={book.book_image}
                          publishYear={book.publish_year}
                          authorName={book.author}
                        />
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>No related books found for this author.</p>
                )}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Page;
