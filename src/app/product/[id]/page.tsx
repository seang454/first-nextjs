import ProductDetail from "@/components/productDetail";
import ProductDetailLoading from "@/components/productDetailLoading";
import React, { Suspense } from "react";

type Params = {
  id: string; // id from the URL is usually a string
};

// Async function receiving a string I
export default async function Page({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  return (
    <>
      <Suspense fallback={<ProductDetailLoading/>}>
        <ProductDetail id={id} />
      </Suspense>
    </>
  );
}
