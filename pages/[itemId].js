import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link';
function DetailPage() {
    const router = useRouter();
    const id = router.query.itemId;
    console.log(id)
    return (
        <div >
            <Link href="/">back</Link>
            <h1>{id}</h1>

        </div>
    )
}

export default DetailPage