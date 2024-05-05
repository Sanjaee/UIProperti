import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const DetailProduct = () => {
  const [properti, setProperti] = useState(null); // Mengubah initial state menjadi null
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProperti(data); // Menyimpan data produk dalam state properti
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, [id]);

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const sliderSettings = {
    infinite: true, // Mengubah dari 'Infinity' menjadi 'infinite'
    speed: 500,
    slidesToShow: 1, // Mengubah 'slieToShow' menjadi 'slidesToShow'
    slidesToScroll: 1, // Mengubah 'slidesToScroll' menjadi 'slidesToScroll'
    arrows: false,
  };

  return (
    <>
      {properti ? (
        <div className="flex flex-col bg-[#F0F3F7] sm:hidden mb-80">
          <Slider {...sliderSettings}>
            {properti.images.map(
              (
                url,
                index // Menggunakan properti.images untuk slideshow
              ) => (
                <div key={index} className="sm:hidden mt-[52px]">
                  <img
                    className="object-cover"
                    src={url}
                    alt={properti.title}
                  />
                </div>
              )
            )}
          </Slider>
          <div className="px-2 shadow-sm bg-white py-4">
            <p className="text-lg font-bold">{formatRupiah(properti.price)}</p>
            <p className="mt-2">{properti.title}</p>{" "}
            <div className="flex items-center mt-3">
              <p className="text-sm">Terjual {properti.sales}</p>
              <button className="text-sm ml-2 px-1 py-1 border border-gray-400 rounded-md">
                <div className="flex items-center">
                  <img
                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/phoenix/kratos/de64305b.svg"
                    alt=""
                  />
                  <p className="pt-[2px] ml-1"> {properti.rating}</p>
                </div>
              </button>
              <button className="text-sm ml-2 px-1 py-1 border border-gray-400 rounded-md flex items-center">
                <img
                  className="w-4"
                  src="https://images.tokopedia.net/img/pdp/info/icon/discussion_filled.png"
                  alt=""
                />
                <p className="px-1">13</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </>
  );
};

export default DetailProduct;
