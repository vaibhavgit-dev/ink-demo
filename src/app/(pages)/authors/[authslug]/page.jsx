"use client";
import { useState, useEffect } from "react";
import inkdouble1 from "@/app/assests/image/inkdouble1.svg";
import inkdouble2 from "@/app/assests/image/inkdouble2.svg";
import Image from "next/image";
import bgauthor from "@/app/assests/image/authors-back.svg";
import Loader from "@/app/components/Loader";
import Link from "next/link";
import AuthorBooksCards from "../authorBooksCards";
import { Helmet } from "react-helmet";

const Page = ({ params }) => {
  const { authslug } = params;

  const [authorInfo, setAuthorInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const defaultImage = "/author-defaultimages.png";

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const response = await fetch(
          `https://dashboard.bluone.ink/api/public/authors/${authslug}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Author data:", data); // Debug log
        
        if (!data || !data.name) {
          throw new Error("Invalid author data received");
        }

        setAuthorInfo({
          id: data.id,
          author_name: data.name,
          authslug: data.slug,
          image: data.imageUrl,
          authorDescription: data.description,
          authorSocial: data.socialMedia ? Object.values(data.socialMedia) : [],
          books: data.books || [],
        });
      } catch (error) {
        console.error("Error fetching author data:", error);
        setAuthorInfo(null);
      } finally {
        setLoading(false);
      }
    };

    if (authslug) {
      fetchAuthorData();
    }
  }, [authslug]);

  if (loading) {
    return <Loader />;
  }

  if (!authorInfo) {
    return <div>Author not found.</div>;
  }

  // Meta title and description and canonical
  const pageTitle = `${authorInfo.author_name} | BluOne Ink Author`;
  const pageDescription = `Ink Author`;
  const canonicalUrl = `https://www.bluone.ink/authors/${authslug}`;

  // Short and full description logic
  const descriptionWords = authorInfo.authorDescription.split(" ");
  const shortDescription =
    descriptionWords.slice(0, 80).join(" ") +
    (descriptionWords.length > 80 ? "" : "");
  const fullDescription = authorInfo.authorDescription;

  return (
    <>
      <main className="wrapper pt-0 pb-10">
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={canonicalUrl} />
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
              <h4 className="mt-20 pt-10 text-[28px] lg:text-4xl mb-5">
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
                  else if (social.includes("facebook")) platformName = "Facebook";
                  else if (social.includes("instagram")) platformName = "Instagram";
                  else if (social.includes("youtube")) platformName = "YouTube";
                  else if (social.includes("twitter") || social.includes("x.com"))
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
                  {authorInfo.books.length >= 2
                    ? `${authorInfo.author_name}'s books published by BluOne Ink`
                    : `${authorInfo.author_name}'s book published by BluOne Ink`}
                </h3>
              </i>
              <Image
                src={inkdouble2}
                width={55}
                height={55}
                alt="inkdouble2"
              />
            </div>

            <div className="wrapper mt-12 flex flex-wrap justify-center">
              {authorInfo.books.length > 0 ? (
                authorInfo.books.map((book, i) => (
                  <div
                    key={i}
                    className="p-4 mb-4 hover:shadow-md input-border border-[#ffffff00] hover:border-[#BABABA] rounded-md md:w-1/2 lg:w-1/4"
                  >
                    <Link href={`/books/${book.slug}`} style={{ textDecoration: "none" }}>
                      <AuthorBooksCards
                        title={book.title}
                        thumbnailUrl={book.thumbnailUrl}
                        publishYear={book.publishYear}
                        authorName={authorInfo.author_name}
                        imageContainerClass="h-[400px] lg:h-[450px]"
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
    </>
  );
};

export default Page;
