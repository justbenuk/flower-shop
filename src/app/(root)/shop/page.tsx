import PageTitle from "@/components/page-title"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Shop'
}

export default function ShopPage() {
  return (
    <>
      <PageTitle title="Our Shop" description="All Product Categories" />
      <p>this is the shop</p>
    </>
  )
}

