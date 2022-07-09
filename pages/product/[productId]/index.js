import React from 'react'
import {useRouter} from 'next/router'
function index() {
    const router = useRouter()
    const productId = router.query.productId; 
    return (
        <div>
            Product details for {productId}
        </div>
    )
}

export default index
