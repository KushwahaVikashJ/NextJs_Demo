import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
function index({ productId = 100 }) {
  const router = useRouter()
  const handleClick = () => {
    router.push("/blog")
  }
  return (
    <>
      <p>Product Listing</p>
      <Link href="/blog">
        <a>Blogs</a>
      </Link>
      <br />
      <Link href={`/product/${productId}`}>
        <a>Product 100</a>
      </Link>
      <br />
      <p onClick={handleClick} style={{ cursor: "pointer" }}>
        Place order
      </p>
    </>
  )
}

export default index
