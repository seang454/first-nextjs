// src/hooks/useProducts.ts
"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { productType } from "@/types/product-type";
//npm install swr
type ProductResponse = {
  products: productType[];
};

export function UseProducts() {
  const { data, error, isLoading } = useSWR<ProductResponse>(
    "https://dummyjson.com/products",
    fetcher
  );

  return {
    products: data?.products || [],
    isLoading,
    error,
  };
}
