import { useState } from "react";
import axios from "axios";

const UplodeProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [sellerId, setSellerId] = useState(1);
  const [categoryId, setCategoryId] = useState(1);
  const [images, setImages] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSellerIdChange = (e) => {
    setSellerId(e.target.value);
  };

  const handleCategoryIdChange = (e) => {
    setCategoryId(e.target.value);
  };

  const handleImageChange = (e, index) => {
    const files = e.target.files;
    if (files) {
      const newImages = [...images];
      newImages[index] = files[0];
      setImages(newImages);
    }
  };

  const handleAddImageInput = () => {
    setImages([...images, null]);
  };

  const handleRemoveImageInput = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("product_name", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("location", location);
      formData.append("seller_id", sellerId);
      formData.append("category_id", categoryId);
      images.forEach((image) => {
        formData.append("images", image);
      });

      const response = await axios.post(
        "https://be-olx.vercel.app/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccessMessage(response.data.message);
      setErrorMessage("");
      setProductName("");
      setDescription("");
      setPrice(0);
      setLocation("");
      setSellerId(0);
      setCategoryId(0);
      setImages([]);
    } catch (error) {
      setErrorMessage("Failed to upload images.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <label>Product Name:</label>
          <input
            className="border border-green-500 rounded-lg p-2 mx-9"
            type="text"
            value={productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label>Description:</label>
          <textarea
            className="border border-green-500 rounded-lg p-2 mx-9"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="flex flex-col items-center">
          <label>Price:</label>
          <input
            className="border border-green-500 rounded-lg p-2 mx-9"
            type="number"
            value={price}
            onChange={handlePriceChange}
          />
        </div>

        <div className="flex flex-col items-center">
          <label>Location:</label>
          <input
            className="border border-green-500 rounded-lg p-2 mx-9"
            type="text"
            value={location}
            onChange={handleLocationChange}
          />
        </div>

        <div className="flex flex-col items-center">
          <label>Seller ID:</label>
          <input
            className="border border-green-500 rounded-lg p-2 mx-9"
            type="number"
            value={sellerId}
            onChange={handleSellerIdChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label>Category ID:</label>
          <input
            className="border border-green-500 rounded-lg p-2 mx-9"
            type="number"
            value={categoryId}
            onChange={handleCategoryIdChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label>Images:</label>
          {images.map((image, index) => (
            <div key={index}>
              <input
                className="border border-green-500 rounded-lg p-2 mx-9"
                type="file"
                onChange={(e) => handleImageChange(e, index)}
              />
              {image && (
                <img
                  className="mt-2"
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  style={{ maxWidth: "200px" }}
                />
              )}
              <button
                className="border bg-red-500 text-black rounded-lg p-2"
                type="button"
                onClick={() => handleRemoveImageInput(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="border bg-green-500 text-black rounded-lg p-2 mt-6"
            type="button"
            onClick={handleAddImageInput}
          >
            Add Image
          </button>
        </div>

        <button
          className="px-4 py-2 mt-7 border bg-green-500 text-black rounded-lg "
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UplodeProduct;
