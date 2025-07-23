import Container from "@/components/container"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Container className="text-center py-30">
        <h1 className="text-2xl uppercase"><span className="text-rose-500">Whoops, </span>This page has gone</h1>
        <p className=" lg:w-2/3 mx-auto text-lg">We couldn&apos;t find the page you are looking for. Check out some of amazing products by visiting our <Link className="font-medium text-rose-500" href={'/shop'}>Store</Link>. Or if you have any questions, please do get in touch where we will be happy to help you. <Link className="font-medium text-rose-500" href={'/contact'}>Contact Us</Link></p>
      </Container>
    </div>
  )
}

