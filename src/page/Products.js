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
    <div class="container">
      <div class="row">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
      </div>
    </div>
  );
};

export default Products;
