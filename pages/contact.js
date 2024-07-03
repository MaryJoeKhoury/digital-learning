import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import TestContactForm from "@/components/TestContactForm";
import LandingSection from "@/components/LandingSection";

const contactLanding = [
  {
    image: "/images/get-in-touch.png",

    text: "Got Any Question in Mind? Get in Touch",
  },
];
export default function Contact() {
  return (
    <>
      <NavBar />
      {contactLanding.map((info) => (
        <>
          <LandingSection image={info.image} text={info.text} />
        </>
      ))}
      <TestContactForm />
      <Footer />
    </>
  );
}
