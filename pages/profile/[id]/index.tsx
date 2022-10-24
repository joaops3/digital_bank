import React from 'react'
import { useRouter } from "next/router"
const Index = () => {
  const route = useRouter()
  console.log(route.query)
  return (
    <div>index</div>
  )
}

export default Index