import ProductCard from "@/components/productCard";
import React, { Suspense } from "react";
import Loading from "../loading";
const getProduct = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};
export default async function page() {
  const products = getProduct();
  return (
    <>
      <Suspense fallback={<Loading/>}>{<ProductCard products={products} />}</Suspense>
    </>
  );
}
