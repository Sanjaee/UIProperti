import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardProperti = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setData(data.products);
    };
    fetchData();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory
    ? data.filter((item) => item.category === selectedCategory)
    : data;

  return (
    <>
      <div className="w-full z-50  sticky  top-12 h-16 items-center flex px-4 bg-white  overflow-x-auto">
        <button
          className="mr-4 px-4 py-2 rounded-md bg-gray-200"
          onClick={() => filterByCategory("")}
        >
          All
        </button>
        <button
          className="mr-4 px-4 py-2 rounded-md bg-gray-200"
          onClick={() => filterByCategory("fragrances")}
        >
          Fragrances
        </button>
        <button
          className="mr-4 px-4 py-2 rounded-md bg-gray-200"
          onClick={() => filterByCategory("laptops")}
        >
          Laptops
        </button>
        <button
          className="mr-4 px-4 py-2 rounded-md bg-gray-200"
          onClick={() => filterByCategory("smartphones")}
        >
          Smartphones
        </button>
      </div>{" "}
      <div className="w-full grid grid-cols-1 justify-center px-6 py-6">
        {filteredData.map((item) => (
          <Link to={`/detail/${item.id}`} key={item.id}>
            <div
              key={item.id}
              className="w-full rounded-lg border-[1px] border-[#D9D9D9] shadow-md mb-4"
            >
              <img
                className="object-cover h-[296.400px] w-full rounded-lg"
                src={item.thumbnail}
                alt=""
              />
              <div className="flex flex-col p-2">
                <p className="text-[#212121] text-[18px] font-semibold">
                  {item.title}
                </p>
                <p className="text-[#6D7588] text-[18px]">{item.brand}</p>
                <p className="text-[#212121] text-[18px] font-bold">
                  {item.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardProperti;
