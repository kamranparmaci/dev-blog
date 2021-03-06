import Link from "next/link";

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) return <></>;

  return (
    <div className="mt-6">
      <ul className="flex pl-0 list-none my-2">
        {!isFirst && (
          <Link href={prevPage}>
            <a>
              <li className="relative block py-2 px-3 lading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
                Previous
              </li>
            </a>
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`}>
            <a>
              <li className="relative block py-2 px-3 lading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
                {i + 1}
              </li>
            </a>
          </Link>
        ))}
        {!isLast && (
          <Link href={nextPage}>
            <a>
              <li className="relative block py-2 px-3 lading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
                Next
              </li>
            </a>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
