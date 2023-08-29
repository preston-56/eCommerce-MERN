import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../../utils/imagebase";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);
    setData((prevData) => {
      return {
        ...prevData,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, image, category, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      toast(fetchRes.message);
      /* 
       clear input fields after submission
        */
      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Enter required Fields");
    }
  };

  return (
    <div className="p-4">
      <form
        action=""
        className="m-auto w-full max-w-md p-3 shadow flex flex-col bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          className="bg-slate-200 p-1 m-1"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          className="bg-slate-200 p-1 m-1"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="chapati">Chapati</option>
          <option value="smoothies">Smoothies</option>
          <option value="juices">Juices</option>
        </select>

        <label htmlFor="image">Image</label>
        <div
          id="image-container"
          className="h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer"
        >
          {data.image ? (
            <img src={data.image} className="h-full" alt=".img" />
          ) : (
            <span className="text-5xl">
              <BsCloudUpload />
            </span>
          )}
          <input
            type={"file"}
            accept="image/*"
            id="image"
            onChange={uploadImage}
            className="hidden"
          />
        </div>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 m-1"
          onChange={handleOnChange}
          value={data.price}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          value={data.description}
          rows="2"
          className="bg-slate-200 p-1 m-1 resize-none"
          onChange={handleOnChange}
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-600 text-white-lg font-medium my-2 drop-shadow m-1">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
