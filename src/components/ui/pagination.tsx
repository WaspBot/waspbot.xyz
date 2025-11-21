import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The current active page. Must be within the range [1, totalPages].
   */
  currentPage: number;
  /**
   * The total number of pages. Must be a positive integer (>= 1).
   */
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ currentPage, totalPages, onPageChange, className, ...props }, ref) => {
    // Runtime Prop Validation
    if (totalPages < 1) {
      console.warn("Pagination: totalPages must be a positive integer (>= 1).");
      return null; // Or a minimal fallback UI
    }

    if (currentPage < 1 || currentPage > totalPages) {
      console.warn(
        `Pagination: currentPage (${currentPage}) is out of valid range [1, ${totalPages}].`
      );
      // Optionally, you might want to adjust currentPage or return null/fallback here
      // For now, we'll let the component render with the invalid currentPage, but warn.
    }

    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };

    const renderPageButtons = () => {
      const pageButtons = [];
      let maxPageButtons = 5; // Number of page buttons to display

      // Cap maxPageButtons to totalPages to prevent displaying more buttons than pages
      maxPageButtons = Math.min(maxPageButtons, totalPages);

      let startPage = currentPage - Math.floor(maxPageButtons / 2);
      startPage = Math.max(1, startPage);
      startPage = Math.min(startPage, totalPages - maxPageButtons + 1);

      const endPage = startPage + maxPageButtons - 1;

      if (startPage > 1) {
        pageButtons.push(
          <Button
            key="1"
            variant="ghost"
            size="sm"
            onClick={() => handlePageChange(1)}
          >
            1
          </Button>
        );
        if (startPage > 2) {
          pageButtons.push(
            <span key="ellipsis-start" className="px-2 py-1.5 text-sm">
              ...
            </span>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(
          <Button
            key={i}
            variant={i === currentPage ? "outline" : "ghost"}
            size="sm"
            onClick={() => handlePageChange(i)}
            aria-current={i === currentPage ? "page" : undefined}
          >
            {i}
          </Button>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageButtons.push(
            <span key="ellipsis-end" className="px-2 py-1.5 text-sm">
              ...
            </span>
          );
        }
        pageButtons.push(
          <Button
            key={totalPages}
            variant="ghost"
            size="sm"
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </Button>
        );
      }

      return pageButtons;
    };

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination Navigation"
        className={cn("flex items-center justify-center gap-1", className)}
        {...props}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {renderPageButtons()}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </nav>
    );
  }
);

Pagination.displayName = "Pagination";

export { Pagination };
