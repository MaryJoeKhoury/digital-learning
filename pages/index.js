import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import HeroArea from "@/components/HeroArea";
import AboutUs from "@/components/AboutUs";
import CardContainer from "@/components/CardContainer";
import ContactForm from "@/components/ContactForm";

// const inter = Inter({ subsets: ["latin"] });

const aboutInfo = [
  {
    aboutDescription:
      "Welcome to our digital learning platform, where we are dedicated empowering individuals through accessible and innovative education. Our mission is to provide high-quality courses that cater to diverse learning needs, ensuring flexibility and practical skills development. With a focus on interactive learning experiences and expert-led instruction, we aim to inspire lifelong learning and professional growth. Join us to explore a wide range of courses designed to enhance your knowledge and career prospects",
    aboutImage:
      "/images/digital-learning-initiatives-in-cbse-curriculum-jpg.webp",
  },
];
export default function Home() {
  return (
    <div>
      <HeroArea />
      {aboutInfo.map((info) => (
        <AboutUs
          aboutDescription={info.aboutDescription}
          aboutImage={info.aboutImage}
        />
      ))}

      <CardContainer />
      <ContactForm />
      <Footer />
    </div>
  );
}
