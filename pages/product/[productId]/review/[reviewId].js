import React from "react"
import { useRouter } from "next/router"
function ReviewDetails() {
  const router = useRouter()
  const { productId, reviewId } = router.query
  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  )
}

export default ReviewDetails
