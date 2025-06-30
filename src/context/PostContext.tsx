"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product } from "@/types";

const PostContext = createContext<Product[]>([]);

type PostProviderProps = {
  children: ReactNode;
};

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log('data :>> ', data);
      console.log("Fetched products:", data.products);
      setPosts(data.products);
    } catch (error) {
      console.error("Failed to fetch posts", error);
    }
  };

  fetchData();
  }, []);

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
}

export function usePosts() {
  const context = useContext(PostContext);
  console.log(" context:>> ",context);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
}
