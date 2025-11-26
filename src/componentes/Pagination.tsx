import styles from "../styles/PokemonList.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  let start = currentPage - 1;
  let end = currentPage + 1;

  if (start < 1) {
    start = 1;
    end = Math.min(3, totalPages);
  }

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, totalPages - 2);
  }

  const pageNumbers = [];
  for (let i = start; i <= end; i++) pageNumbers.push(i);

  return (
    <div className={styles.pagination}>

      <button
        className={styles.detailsButton}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ‹
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          className={styles.detailsButton}
          onClick={() => onPageChange(num)}
          style={{
            background: num === currentPage ? "#d50000" : "#ff0000",
            fontWeight: num === currentPage ? "bold" : "normal"
          }}
        >
          {num}
        </button>
      ))}

      <button
        className={styles.detailsButton}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ›
      </button>

    </div>
  );
}
