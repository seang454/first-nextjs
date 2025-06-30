'use client'
import { usePosts } from '@/context/PostContext'

export default function Page() {
  const posts = usePosts()
  console.log('posts :>> ', posts);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ul className="space-y-2">
        {posts.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
