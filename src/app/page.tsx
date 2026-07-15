import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/marketing/hero/Hero";
import HowItWorks from "@/components/home/how-it-works/HowItWorks";
import Circles from "@/components/home/circles/Circles";
import Goals from "@/components/marketing/Goals";
import Security from "@/components/home/security/Security";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-onyx text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Circles />
      <Goals />
      <Security />
      <Footer />
    </main>
  );
}