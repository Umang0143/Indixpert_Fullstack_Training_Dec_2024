import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const USPagination = () => {
  const [activePage, setActivePage] = useState(1);

  return (
    <div>
      <h4>Active Page:- {activePage}</h4>

      <Pagination>
        <Pagination.First onClick={() => setActivePage(1)} />

        <Pagination.Prev
          onClick={() => setActivePage((prev) => (prev > 1 ? prev - 1 : prev))}
        />

        <Pagination.Item
          active={activePage === 1}
          onClick={() => setActivePage(1)}
        >
          1
        </Pagination.Item>

        <Pagination.Item
          active={activePage === 2}
          onClick={() => setActivePage(2)}
        >
          2
        </Pagination.Item>

        <Pagination.Item
          active={activePage === 3}
          onClick={() => setActivePage(3)}
        >
          3
        </Pagination.Item>

        <Pagination.Item
          active={activePage === 4}
          onClick={() => setActivePage(4)}
        >
          4
        </Pagination.Item>

        <Pagination.Item
          active={activePage === 5}
          onClick={() => setActivePage(5)}
        >
          5
        </Pagination.Item>

        <Pagination.Next
          onClick={() => setActivePage((prev) => (prev < 5 ? prev + 1 : prev))}
        />

        <Pagination.Last onClick={() => setActivePage(5)} />
      </Pagination>
    </div>
  );
};

export default USPagination;
