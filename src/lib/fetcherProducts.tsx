import { productType } from "@/types/product-type"

type ResponseType = {
  products: productType[]
}

export const fetchProducts = async (): Promise<productType[]> => {
  const res = await fetch('https://dummyjson.com/products')
  if (!res.ok) throw new Error('Failed to fetch')
  
  const data: ResponseType = await res.json() // ✅ Await this!
  return data.products
}
