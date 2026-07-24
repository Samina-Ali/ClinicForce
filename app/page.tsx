import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <section className="py-24 px-6">
        <IntakeForm />
      </section>
      <Footer />
    </>
  );
}