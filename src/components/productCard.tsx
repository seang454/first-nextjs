"use client";
import { productType } from "@/types/product-type";
import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  products,
}: {
  products: Promise<productType[]>;
}) {
  const getProduct = use(products);
  console.log('getProduct :>> ', getProduct);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {getProduct.map((product,index)=>(
        <Link  key={index} href={`product/${product.id}`} >        
        <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 opacity-75"></div>
            <Image
            width={100}
            height={100}
              src={product.images[0]||"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxDb3NtaWMlMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3MjgxNTYwNTR8MA&ixlib=rb-4.0.3&q=80&w=1080"}
              alt="Product Image"
              className="w-full h-64 object-cover object-center relative z-10"
            />
            <div className="absolute top-4 right-4 bg-gray-100 text-xs font-bold px-3 py-2 rounded-full z-20 transform rotate-12 text-amber-300">
              NEW
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2 line-clamp-1">
              {product.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-indigo-600">
                ${product.price}
              </span>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-gray-600">4.9 (120 reviews)</span>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      </Link>


    ))}

    </div>
  );
}
