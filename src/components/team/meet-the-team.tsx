import { TEAMMEMBERS } from "@/data/team-members";
import Container from "../container";
import Image from "next/image";
export default function MeetTheTeam() {
  return (
    <div className="bg-stone-50">
      <Container className="py-24">
        <div className="flex flex-col items-center justify-center space-y-2 pb-20">
          <h1 className="text-5xl font-medium text-center">Meet Our <span className="text-rose-500">Team</span></h1>
          <span className="text-xl lg:w-2/4 lg:mx-auto text-center">A perfect blend of creativity, energy, communication, happiness and love. Let us arrange a smile for you.</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAMMEMBERS.map((staff, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center space-y-4">
              <Image src={staff.profileImg} alt="Staff Profile Image" height={200} width={200} className="rounded-full size-32 lg:size-40" />
              <h1 className="text-md uppercase">{staff.name}</h1>
              <span className="text-sm text-muted-foreground">{staff.job}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>

  )
}

