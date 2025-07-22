import Container from "@/components/container";
import PageTitle from "@/components/page-title";
import Reviews from "@/components/reviews/reviews";
import MeetTheTeam from "@/components/team/meet-the-team";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About Us" description="Where flowers are our insperation" />
      <Container className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
          <div className="flex flex-col justify-center h-full">
            <h1 className="font-medium text-5xl lg:w-3/4">We gather nature&apos;s <span className="text-rose-500">beauty</span> to bring your moments to life.</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
          </div>
          <div>
            <div className="border h-full w-full"><Image src={'/assets/about/florest1.jpg'} alt="florest" width={700} height={300} className="rounded-2xl" /></div>
          </div>
        </div>
      </Container >
      <MeetTheTeam />
      <Reviews />
    </>
  )
}

