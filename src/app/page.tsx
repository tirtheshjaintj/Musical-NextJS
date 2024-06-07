import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/Testimonial";
import UpcomingWebinars from "@/components/Webinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" style={{scrollBehavior:"smooth"}}>
<HeroSection/>
<FeaturedCourses/>
<WhyChooseUs/>
{/* <MusicSchoolTestimonials/>
<UpcomingWebinars/> */}
<Instructors/>
<Footer/>
</main>
  );
}
