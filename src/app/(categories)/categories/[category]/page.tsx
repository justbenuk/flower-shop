import NotFound from "@/app/not-found"
import Container from "@/components/container"
import PageTitle from "@/components/page-title"
import { CATEGORIES } from "@/data/categories"
import { notFound } from "next/navigation"

type ParamsProps = {
  params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: ParamsProps) {

  const { category } = await params

  const array = CATEGORIES.filter(cat => cat.name === category).flatMap((item) => item.subCategories)

  if (array.length === 0) notFound()

  return (
    <>
      <PageTitle title={category} description="" />
      <Container className="my-12">
        {array.map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
      </Container>
    </>
  )
}

