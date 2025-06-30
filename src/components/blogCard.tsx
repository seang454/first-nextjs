'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BlogType } from '@/types/blogType';
import { useSearchParams, useRouter } from 'next/navigation';

export default function BlogCard() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [blog, setBlog] = useState<BlogType[]>([]);
  const [query, setQuery] = useState<string>('');
  const [filtered, setFiltered] = useState<BlogType[]>([]);
  console.log('blog :>> ', blog);

  useEffect(() => {
    const search = searchParams.get('search') || '';
    setQuery(search);
    const fetchBlog = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/posts`);
      const data = await response.json();
      const getData = data?.posts || [];
      setBlog(getData);

      const result = search
        ? getData.filter((post: BlogType) =>
            post.title.toLowerCase().includes(search.toLowerCase())
          )
        : getData;

      setFiltered(result);
    };

    fetchBlog();
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    router.push(`/blog?search=${encodeURIComponent(val)}`);
  };

  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-800">
        <div className="p-4 text-gray-600 dark:text-gray-300">
          <div className="relative flex">
            <input
              type="search"
              name="search"
              value={query}
              onChange={handleChange}
              placeholder="Search"
              className="bg-[#191E2E] dark:bg-gray-800 border-r-0 left-10 h-10 px-5 w-full rounded-full text-sm focus:outline-none border-2 border-gray-500 dark:border-gray-600"
              autoComplete="off"
              required
            />
            <select className="bg-[#191E2E] dark:bg-gray-800 h-10 px-5 rounded-r-full text-white text-sm border-2 border-gray-500 dark:border-gray-600 border-l-0">
              <option value="filter">All</option>
            </select>
            <button className="bg-[#435088] text-white h-10 w-40 px-6 rounded-r-full text-sm border-2 border-gray-500 dark:border-gray-600">
              Copilot
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {filtered.map((blog) => (
          <div key={blog.id}>
            <div className="bg-white p-4 border-2 border-gray-300 dark:border-gray-500 shadow-lg rounded-xl dark:bg-slate-700">
              <div>
                <a href="#">
                  <Image
                    width={500}
                    height={500}
                    className="rounded-lg"
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1080&q=80"
                    alt="Blog Image"
                  />
                </a>
              </div>

              <div className="capitalize text-purple-900 font-semibold my-4 bg-purple-200 w-fit px-3 rounded-lg">
                <p>article</p>
              </div>

              <div className="text-2xl font-bold my-2 dark:text-white line-clamp-1">
                <a href="#">
                  <h2>{blog.title}</h2>
                </a>
              </div>

              <div className="dark:text-gray-400">
                <p>{blog.body.slice(0, 100)}...</p>
              </div>

              <div className="flex items-center mt-4">
                <Image
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1624188327913-e0c59aaaa3ae?auto=format&fit=crop&w=1080&q=80"
                  alt="Author"
                />
                <div className="pl-4">
                  <h3 className="capitalize text-lg font-semibold dark:text-white">
                    Robert Chunga
                  </h3>
                  <p className="capitalize text-sm text-gray-400">Aug 15, 2021 · 16 min read</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
