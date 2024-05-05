import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardProperti = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setData(data.products);
    };
    fetchData();
  }, []);

  return (
    // grid
    <div className="w-full grid grid-cols-1  justify-center  px-6 py-6">
      {/* card pproperti */}
      {Data.map((item) => (
        <Link to={`/detail/${item.id}`} key={item.id}>
          <div
            key={item.id}
            className=" w-full  rounded-lg border-[1px] border-[#D9D9D9] shadow-md mb-4"
          >
            <img
              className="object-cover h-[296.400px] w-full rounded-lg"
              src={item.thumbnail}
              alt=""
            />
            <div className="flex flex-col p-2">
              <p className="text-[#212121] text-[18px] font-semibold">
                {" "}
                {item.title}
              </p>
              <p className="text-[#6D7588] text-[18px]">{item.brand}</p>
              <p className="text-[#212121] text-[18px]  font-bold">
                {item.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardProperti;
