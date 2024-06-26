import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingSection from "@/components/LandingSection";
import CardContainer from "@/components/CardContainer";
import Feature from "@/components/Feature";
import SectionTitle from "@/components/SectionTitle";

const aboutLanding = [
  {
    image: "/images/1200x0.webp",

    text: "MORE ABOUT E-LEARNING",
  },
];

const featuresInfo = [
  {
    id: 1,
    icon: "/icons/team.svg",
    title: "Success Stories",
    description:
      "We are proud of the impact we have made on our learners. Our success stories highlight the transformative experiences our courses have provided, helping individuals achieve their personal and professional goals.",
  },
  {
    id: 2,
    icon: "/icons/student-review.svg",
    title: "Our Students",
    description:
      "Our learners love what we do. Our students reviews reflect the high quality of our courses and the expertise of our talented instructors, showcasing the value and impact of our educational offerings on their growth.",
  },
  {
    id: 3,
    icon: "/icons/degree.svg",
    title: "Trusted Degrees",
    description:
      "Our certifications are recognized and trusted by employers and educational institutions around the world. Earning a certification from E-LEARNING means you have demonstrated proficiency and dedication to your field of study.",
  },
];

export default function About() {
  return (
    <div>
      <Navigation />
      {aboutLanding.map((info, i) => (
        <>
          <LandingSection
            image={info.image}
            text={info.text}
            // bgColor="#fdd5b5"
          />
        </>
      ))}

      <CardContainer title="Explore the world with us">
        {featuresInfo.map((info) => (
          <Feature
            icon={info.icon}
            title={info.title}
            description={info.description}
          />
        ))}
      </CardContainer>

      <CardContainer title="Meet Our Talented Team" />

      <CardContainer title="Our Bright Students Reviews" />
      <Footer />
    </div>
  );
}
