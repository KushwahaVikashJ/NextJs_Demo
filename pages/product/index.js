import React from "react"
import Link from "next/link"
function index() {
  return (
    <div>
      Product Listing
      <Link href="/blog">
        <a>Blogs</a>
      </Link>
    </div>
  )
}

export default index
