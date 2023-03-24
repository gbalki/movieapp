import Link from 'next/link'
import React from 'react'

function MenuItem({mn}) {
  return (
    <Link href={mn.url}>{mn.name}</Link>
  )
}

export default MenuItem