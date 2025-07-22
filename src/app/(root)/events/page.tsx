import PageTitle from "@/components/page-title"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Events'
}

export default function EventsPage() {
  return (
    <>
      <PageTitle title="Our Events" description="Any Events we host or maybe attending" />
      <p>this is the shop</p>
    </>
  )
}

