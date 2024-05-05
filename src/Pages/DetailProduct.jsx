import { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailProduct = () => {
  const [Data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {Data.length > 0 ? (
        <>
          <h1>{Data.title}</h1>
          <p>{Data.description}</p>
          {/* Display other product details based on the Data object structure */}
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default DetailProduct;
