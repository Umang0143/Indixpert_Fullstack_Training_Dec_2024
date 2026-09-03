import { Pagination } from "react-bootstrap";

export default function CustomPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  return (
    <Pagination className="d-flex justify-content-center mt-4">

      {/* First */}
      <Pagination.First
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      />

      {/* Prev */}
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />

      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item
          key={index}
          active={currentPage === index + 1}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}

      {/* Next */}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />

      {/* Last */}
      <Pagination.Last
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      />
    </Pagination>
  );
}
