import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import DesktopMenuItem from "./desktop-menu-item";

export default function DesktopMenu() {
  return (
    <nav className="flex flex-row items-center justify-center space-x-8">
      <DesktopMenuItem href='/about' name="About" />
      <DesktopMenuItem href='/shop' name="shop" />
      <DesktopMenuItem href='/posts' name="Blog" />
      <DesktopMenuItem href='/gallery' name="gallery" />
      <DesktopMenuItem href='/events' name="events" />
      <DesktopMenuItem href='/contact' name="contact" />
      <Link href='/cart'>
        <AiOutlineShopping className="text-2xl" />
      </Link>
    </nav>
  )
}

