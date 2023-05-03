import { useState, useEffect, useRef } from "react";

const Products = () => {
  const para = useRef(null);
  const [filterProducts, setFilterProducts] = useState([]);

  const categories = [
    "카테고리1",
    "카테고리2",
    "카테고리3",
    "카테고리4",
    "카테고리5",
    "카테고리6",
  ];

  return (
    <div class="row text-center">
      <ul class="list-group w-50 p-3">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
};

export default Products;
