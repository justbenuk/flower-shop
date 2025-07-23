import Image from "next/image";
import Link from "next/link";

type CategoryProps = {
  category: {
    id: number
    name: string
    image: string
  }
}

export default function CategoryItem({ category }: CategoryProps) {
  return (
    <Link href={`/categories/${category.name}`} key={category.id}>
      <Image src={category.image} alt="category image" width={500} height={500} className="rounded-xl w-full h-[400px]" />
      <h1 className="text-center uppercase py-8">{category.name}</h1>
    </Link>
  )
}

