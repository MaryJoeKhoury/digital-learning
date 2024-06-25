import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import HeroArea from "@/components/HeroArea";
import AboutUs from "@/components/AboutUs";
import CardContainer from "@/components/CardContainer";
import ContactContainer from "@/components/ContactContainer";
import ContactInput from "@/components/ContactInput";
import Card from "@/components/Card";

// const inter = Inter({ subsets: ["latin"] });

const aboutInfo = [
  {
    aboutDescription:
      "Welcome to our digital learning platform, where we are dedicated empowering individuals through accessible and innovative education. Our mission is to provide high-quality courses that cater to diverse learning needs, ensuring flexibility and practical skills development. With a focus on interactive learning experiences and expert-led instruction, we aim to inspire lifelong learning and professional growth. Join us to explore a wide range of courses designed to enhance your knowledge and career prospects",
    aboutImage:
      "/images/digital-learning-initiatives-in-cbse-curriculum-jpg.webp",
  },
];

const contactInputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    id: 3,
    name: "phone",
    type: "phone",
    placeholder: "Enter your phone number",
  },
  {
    id: 4,
    name: "",
    type: "textarea",
    placeholder: "Leave a message",
  },
];

const planInfo = [
  {
    id: 1,
    image: "/icons/deep-learning.png",
    title: "Beginner",
    price: "$5 / mo",
    description: [
      {
        id: 1,
        text: "Access to 10 Courses",
      },
      {
        id: 2,
        text: "Basic Study Materials",
      },
      {
        id: 3,
        text: "Email Support",
      },
      {
        id: 4,
        text: "Community Access",
      },
    ],
  },
  {
    id: 2,
    className: "intermediate-plan__icon",
    image: "/icons/knowledge.png",
    title: "Intermediate",
    price: "$28 / mo",
    description: [
      {
        id: 1,
        text: "Access to 50 Courses",
      },
      {
        id: 2,
        text: "Extended Study Materials",
      },
      {
        id: 3,
        text: "Phone + Email Support",
      },
      {
        id: 4,
        text: "Community and Webinar Access",
      },
    ],
  },
  {
    id: 3,
    image: "/icons/machine-learning.png",
    title: "Advanced",
    price: "$49 / mo",
    description: [
      {
        id: 1,
        text: "Access to All Courses",
      },
      {
        id: 2,
        text: "Premium Study Materials",
      },
      {
        id: 3,
        text: "Dedicated Support",
      },
      {
        id: 4,
        text: "Exclusive Webinar Access",
      },
    ],
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
      <CardContainer>
        {planInfo.map((plan) => (
          <Card
            image={plan.image}
            title={plan.title}
            price={plan.price}
            description={plan.description}
          />
        ))}
      </CardContainer>
      <ContactContainer>
        {contactInputs.map((input) => (
          <ContactInput
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
          />
        ))}
      </ContactContainer>
      <Footer />
    </div>
  );
}
