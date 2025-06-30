import Link from "next/link";

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            testing data
          </Link>
          <div className="flex items-center space-x-4 text-black">
            <Link href="/product">
              <button>Suspense</button>
            </Link>
            <Link href="/gallery">
              <button>Gallery</button>
            </Link>
            <Link href="/blog">
              <button>Blog</button>
            </Link>
            <Link href="/user/john-doe">
              <button>Profile</button>
            </Link>
            <Link href="/login">
              <button className="bg-white text-black">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
