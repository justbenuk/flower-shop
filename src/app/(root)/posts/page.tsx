import PageTitle from "@/components/page-title"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog'
}

export default function BlogPage() {
  return (
    <>
      <PageTitle title="Our Blog" description="Sharing everything flowers" />
      <p>this is the shop</p>
    </>
  )
}

