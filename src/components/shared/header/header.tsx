import Container from "@/components/container";
import DesktopMenu from "@/components/menus/desktop-menu";
import Link from "next/link";
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";


export default function Header() {
  return (
    <header>
      <Container>
        <div className="flex flex-row items-center justify-between py-6">
          <Link href={'/'} className="uppercase font-medium text-md lg:text-2xl">
            <span className="text-rose-500">Flower</span>Shop
          </Link>
          <div className="hidden lg:block">
            <DesktopMenu />
          </div>
          <div className="lg:hidden flex flex-row items-center justify-center gap-3">
            <AiOutlineMenu className="text-xl" />
            <AiOutlineShopping className="text-2xl" />
          </div>
        </div>
      </Container>
    </header>
  )
}

