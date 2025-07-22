import PageTitle from "@/components/page-title"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Gallery'
}

export default function GalleryPage() {
  return (
    <>
      <PageTitle title="Our Gallery" description="Showing some of the flowers sent to our clients" />
      <p>this is the shop</p>
    </>
  )
}

