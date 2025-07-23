import { CATEGORIES } from "@/data/categories";
import CategoryItem from "./category-item";

export default function CategoryList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {CATEGORIES.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}

