import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // change this to your total number of pages

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-1  p-1 rounded-md">
        {/* Previous */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-3 py-1 border rounded ${
            currentPage === 1
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "border-gray-300"
          }`}
        >
          Previous
        </button>

        {/* Page numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`px-3 py-1 border rounded ${
                currentPage === page
                  ? "bg-green-600 text-white font-bold border-green-600"
                  : "border-gray-300"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border rounded ${
            currentPage === totalPages
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "border-gray-300"
          }`}
        >
          Next
        </button>
      </div>

      {/* <p className="mt-4 text-lg">You are on page {currentPage}</p> */}
    </div>
  );
}
