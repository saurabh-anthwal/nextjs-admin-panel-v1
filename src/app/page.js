"use client";
import Navbar from "@/components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config";
import ProductCard from "@/components/ProductCard";
import ProtectedRoute from "@/route/ProtectedRoute";
import { useEffect,useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
useEffect(()=>{
 const abc = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    if(querySnapshot){
      const productsData = [];
      querySnapshot.forEach((doc) => {
        productsData.push({ id: doc.id, ...doc.data() });
        setProducts(productsData)
      });
    }
  };
abc()
},[])

  return (
    <ProtectedRoute>
      <div className="p-2 bg-white">   
        <ProductCard products={products}/>
      </div>
    </ProtectedRoute>
  );
}
