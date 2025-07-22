import Container from "@/components/container";
import Link from "next/link";

export default function Footer() {
  const copyDate = new Date().getFullYear()

  return (
    <footer className="bg-stone-50">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center lg:items-start text-sm space-y-2">
            <h1 className="uppercase font-medium text-xl"><span className="text-rose-500">Flower</span>Shop</h1>
            <nav className="flex flex-col items-center lg:items-start justify-center space-y-2 text-muted-foreground">
              <span>123 Fake Street</span>
              <span>Fake Town</span>
              <span>Fake PCode</span>
            </nav>
          </div>
          <div className="flex flex-col items-center lg:items-start text-sm space-y-2">
            <h1 className="uppercase font-medium text-sm">Customer Service</h1>
            <nav className="flex flex-col items-center lg:items-start justify-center space-y-2 text-muted-foreground">
              <Link href={'/contact'}>Help & Contact Us</Link>
              <Link href={'/contact'}>Returns & Refunds</Link>
              <Link href={'/contact'}>Terms & Conditions</Link>
            </nav>
          </div>
          <div className="flex flex-col items-center lg:items-start text-sm space-y-2">
            <h1 className="uppercase font-medium text-sm">Social Media</h1>
            <nav className="flex flex-col items-center lg:items-start justify-center space-y-2 text-muted-foreground">
              <Link href={'/contact'}>Twitter</Link>
              <Link href={'/contact'}>Instagram</Link>
              <Link href={'/contact'}>TikTok</Link>
              <Link href={'/contact'}>Facebook</Link>
            </nav>
          </div>
          <div className="flex flex-col items-center lg:items-start text-sm space-y-2">
            <h1 className="uppercase font-medium text-sm">Company Links</h1>
            <nav className="flex flex-col items-center lg:items-start justify-center space-y-2 text-muted-foreground">
              <Link href={'/about'}>About Us</Link>
              <Link href={'/shop'}>Shop</Link>
              <Link href={'/posts'}>Blog</Link>
              <Link href={'/gallery'}>Gallery</Link>
              <Link href={'/events'}>Events</Link>
              <Link href={'/login'}>Login</Link>
            </nav>
          </div>
        </div>
      </Container>
      <div className="border-t">
        <p className="text-xs text-center">&copy; {copyDate} Ben Andrews  | All Rights Reserved</p>
      </div>
    </footer>
  )
}

