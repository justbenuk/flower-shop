import Container from "../container";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { REVIEWITEMS } from "@/data/review-items";

export default function Reviews() {
  return (
    <Container className="py-24 max-w-4xl px-6">
      <div>
        <Carousel>
          <CarouselContent>
            {REVIEWITEMS.map((item) => (
              <CarouselItem key={item.id}>
                <div className="flex flex-col items-center justify-center px-12">
                  <p className="text-xl text-center">{item.review}</p>
                  <h1 className="text-sm uppercase font-medium">{item.name}</h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" hidden lg:flex bg-rose-500 text-white border-white" />
          <CarouselNext className="hidden lg:flex bg-rose-500 text-white border-white" />
        </Carousel>
      </div>
    </Container>
  )
}

