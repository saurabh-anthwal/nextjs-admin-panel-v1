"use client";
import { createProduct } from "@/services/productService";
import React from "react";
import { useState } from "react";

const CreateProposal = () => {
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    off_price: "",
    old_price: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "off_price" || name == "old_price" || name == "price") {
      // validate if price is number
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle form submission here, for example, send the data to an API or perform any other actions
    const x = await createProduct(formData);

    if (x?.id) {
      setFormData({
        name: "",
        details: "",
        off_price: "",
        old_price: "",
        price: "",
        image: "",
      });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center my-6">Create Proposal</h1>
      <form onSubmit={handleSubmit} className="max-w-[400px] mx-auto">
        <div className="flex gap-4">
          <label>
            Name:
            <input
              className="flex-1 text-sm my-1 px-2 py-2 w-full outline outline-gray-200 rounded-xl"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Details:
            <input
              className="flex-1 text-sm my-1 px-2 py-2 w-full outline outline-gray-200 rounded-xl"
              type="text"
              name="details"
              value={formData.details}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex gap-2">
          <label>
            Off Price:
            <input
              className="flex-1 text-sm my-1 px-2 py-2 w-full outline outline-gray-200 rounded-xl"
              type="text"
              name="off_price"
              value={formData.off_price}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Old Price:
            <input
              className="flex-1 text-sm my-1 px-2 py-2 w-full outline outline-gray-200 rounded-xl"
              type="text"
              name="old_price"
              value={formData.old_price}
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          Price:
          <input
            className="text-sm my-1 px-2 py-2 w-full outline outline-gray-200 rounded-xl"
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            className="text-sm my-1 px-2 py-2 w-full outline outline-gray-200 rounded-xl"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-black w-full px-3 py-2 text-white mt-3  rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProposal;
