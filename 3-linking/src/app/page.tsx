import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Link href='/about'>About</Link>
      <Link href='/portfolio'>portfolio</Link>
    </div>
  )
}

export default page