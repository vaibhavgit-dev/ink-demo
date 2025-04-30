import React from 'react';

function BooksCards({ title, bookPrice, format, language, authorName, coverImage, publishYear, imageContainerClass }) {
  const defaultImage = "https://via.placeholder.com/250x400.png?text=No+Image+Available";

  return (
    <div className="w-full min-h-[300px]">
      <div className="flex flex-col h-full">
        {/* Image container with customizable class */}
        <div className={`${imageContainerClass || 'h-[200px] lg:h-[300px]'}`}>
          <img
            src={coverImage || defaultImage}
            alt={title || "Book cover"}
            className="object-cover object-top w-full h-full"
          />
        </div>
        <div className="flex-1">
          {title && (
            <h6 className="pt-4 uppercase font-semibold font-barlow leading-5">
              {title}
            </h6>
          )}
          {authorName && (
            <h4 className="uppercase font-normal font-barlow pt-2 text-base leading-5 text-[#0d1928e8]">
              {Array.isArray(authorName) ? authorName.join(', ') : authorName}
            </h4>
          )}
          {bookPrice && format && language && (
            <h4 className="text-[#0d1928e8] pt-1 text-base font-normal font-barlow uppercase">
              {bookPrice}{","} {format}{","} {language}
            </h4>
          )}
          {publishYear && (
            <p className="text-gray-500">
              {publishYear}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BooksCards;
