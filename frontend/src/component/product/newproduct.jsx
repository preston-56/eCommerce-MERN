import React from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../../utils/imagebase";

const NewProduct = () => {
  const uploadImage = async(e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);
  };

  return (
    <div className="p-4">
      <form
        action=""
        className="m-auto w-full max-w-md p-3 shadow flex flex-col bg-white"
      >
        <label htmlFor="name">Name</label>
        <input type={"text"} name="name" className="bg-slate-200 p-1 m-1" />

        <label htmlFor="category">Category</label>
        <select name="" id="category" className="bg-slate-200 p-1 m-1">
          <option value="">Fruits</option>
          <option value="">Vegetables</option>
          <option value="">Chapati</option>
          <option value="">Smoothies</option>
          <option value="">Juices</option>
        </select>

        <label htmlFor="image">Image</label>
        <div
          id="image"
          className="h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer"
        >
          <span className="text-5xl">
            <BsCloudUpload />
          </span>
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
        <input type={"text"} className="bg-slate-200 p-1 m-1" />

        <label htmlFor="description">Description</label>
        <textarea
          name=""
          id=""
          rows="2"
          className="bg-slate-200 p-1 m-1 resize-none"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-600 text-white-lg font-medium my-2 drop-shadow m-1">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
