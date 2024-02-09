import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiRead } from "react-icons/ci";
import { GrEdit } from "react-icons/gr";

const AdminDashboard = ({ products }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-400 p-2">
          <thead className="">
            <tr className="bg-gray-200 p-2">
              <th className="px-4 py-2 ">Sr no</th>
              <th className="px-4 py-2 ">Name</th>
              <th className="px-4 py-2 ">Price</th>
              <th className="px-4 py-2 ">Details</th>
              <th className="px-4 py-2 "></th>
              <th className="px-4 py-2 "></th>
              <th className="px-4 py-2 "></th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => (
              <tr key={item.id} className="bg-white text-center even:bg-gray-100">
                <td className="px-4 py-2 sm:w-1/4 md:w-1/6">{i + 1}</td>
                <td className="px-4 py-2 sm:w-1/4 md:w-2/6">{item.name}</td>
                <td className="px-4 py-2 sm:w-1/4 md:w-1/6">{item.price}</td>
                <td className="px-4 py-2 sm:w-1/4 md:w-1/6">{item.details}</td>
                <td className="px-4 py-2 sm:w-1/4 md:w-1/6">
                  <span className="flex items-center cursor-pointer">
                    <CiRead />
                    <b>Read more</b>
                  </span>
                </td>
                <td className="px-4 py-2 sm:w-1/4 md:w-1/6">
                  <GrEdit />
                </td>
                <td className="px-4 py-2 sm:w-1/4 md:w-1/6">
                  <RiDeleteBin6Line />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
