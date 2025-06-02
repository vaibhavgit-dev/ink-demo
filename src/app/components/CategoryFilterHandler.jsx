'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CategoryFilterHandler({
  setCategoryFilter,
  setShowFilters,
  books,
}) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');

  useEffect(() => {
    if (initialCategory && books.length > 0) {
      // Find the full category name from the fetched books data
      const categoryObject = books.find(book => book.category?.toLowerCase() === initialCategory.toLowerCase());
      if (categoryObject && categoryObject.category) {
        setCategoryFilter([categoryObject.category]);
        setShowFilters(true); // Optionally show filters when a category is applied
      }
    }
  }, [initialCategory, books, setCategoryFilter, setShowFilters]); // Add dependencies

  // This component doesn't render anything visible
  return null;
} 