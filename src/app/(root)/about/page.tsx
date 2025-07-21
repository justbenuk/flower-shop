import Container from "@/components/container";
import PageTitle from "@/components/page-title";
import Reviews from "@/components/reviews/reviews";
import { TEAMMEMBERS } from "@/data/team-members";
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
            <div className="border h-full w-full"><Image src={'/assets/florest1.jpg'} alt="florest" width={700} height={300} className="rounded-2xl" /></div>
          </div>
        </div>
      </Container >
      <div className="bg-stone-50">
        <Container className="py-24">
          <div className="flex flex-col items-center justify-center space-y-2 pb-20">
            <h1 className="text-5xl font-medium text-center">Meet Our <span className="text-rose-500">Team</span></h1>
            <span className="text-xl lg:w-2/4 lg:mx-auto text-center">A perfect blend of creativity, energy, communication, happiness and love. Let us arrange a smile for you.</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {TEAMMEMBERS.map((staff, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center space-y-4">
                <Image src={staff.profileImg} alt="Staff Profile Image" height={200} width={200} className="rounded-full" />
                <h1 className="text-md uppercase">{staff.name}</h1>
                <span className="text-sm text-muted-foreground">{staff.job}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Reviews />
    </>
  )
}

