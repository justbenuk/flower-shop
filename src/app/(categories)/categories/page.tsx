import CategoryList from "@/components/categories/category-list"
import Container from "@/components/container"
import PageTitle from "@/components/page-title"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Shop'
}

export default function ShopPage() {
  return (
    <>
      <PageTitle title="Our Shop" description="All Product Categories" />
      <Container className="py-24">
        <CategoryList />
      </Container>
    </>
  )
}

