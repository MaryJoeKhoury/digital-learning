import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LandingSection from "@/components/LandingSection";
import FeaturesContainer from "@/components/FeaturesContainer";
import Features from "@/components/Features";
import SectionTitle from "@/components/SectionTitle";
import PeopleCardsContainer from "@/components/PeopleCardsContainer";

const aboutLanding = [
  {
    image: "/images/1200x0.webp",

    text: "MORE ABOUT E-LEARNING",
  },
];

const featuresInfo = [
  {
    id: 1,
    icon: "/icons/meet-the-team.svg",
    title: "Success Stories",
    description:
      "We are proud of the impact we have made on our learners. Our success stories highlight the transformative experiences our courses have provided, helping individuals achieve their personal and professional goals.",
  },
  {
    id: 2,
    icon: "/icons/custumor-review.svg",
    title: "Our Students",
    description:
      "Our learners love what we do. Customer reviews reflect the high quality of our courses and the expertise of our instructors, showcasing the value and impact of our educational offerings.",
  },
  {
    id: 3,
    icon: "/icons/custumor-review.svg",
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
            bgColor="#fdd5b5"
          />
        </>
      ))}

      <FeaturesContainer>
        {featuresInfo.map((info) => (
          <Features
            icon={info.icon}
            title={info.title}
            description={info.description}
          />
        ))}
      </FeaturesContainer>
      <SectionTitle title="Meet Our Talented Team" />
      <PeopleCardsContainer />
      <SectionTitle title="Our Bright Students Reviews" />
      <PeopleCardsContainer />
      <Footer />
    </div>
  );
}
