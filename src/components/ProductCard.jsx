import React from "react";
import AdminDashboard from "./AdminDashboard";
import SideBar from "./SideBar";

const ProductCard = ({products}) => {

  return (
    <div className="">
    <div>
    </div>
    <div className=" m-2">
      <AdminDashboard products={products}/>
    </div>
    </div>
  );
};

export default ProductCard;
