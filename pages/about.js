import React, { useRef, useState, useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import LandingSection from "@/components/LandingSection";
import CardContainer from "@/components/CardContainer";
import Feature from "@/components/Feature";
import PeopleCard from "@/components/PeopleCard";
import AboutUs from "@/components/AboutUs";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AlignContainer from "@/components/AlignContainer";
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
    link: "#teachers",
  },
  {
    id: 2,
    icon: "/icons/student-review.svg",
    title: "Our Students",
    description:
      "Our learners love what we do. Our students reviews reflect the high quality of our courses and the expertise of our talented instructors, showcasing the value and impact of our educational offerings on their growth.",
    link: "#students",
  },
  {
    id: 3,
    icon: "/icons/degree.svg",
    title: "Trusted Degrees",
    description:
      "Our certifications are recognized and trusted by employers and educational institutions around the world. Earning a certification from E-LEARNING means you have demonstrated proficiency and dedication to your field of study.",
    link: "#degree",
  },
];

const teachersInfo = [
  {
    id: 1,
    image: "/images/woamn-ai.jpg",
    name: "Mary Smith",
    description: "Software Engineer",
  },
  {
    id: 2,
    image: "/images/teacher-2.webp",
    name: "Joe Thompson",
    description: "Software Engineer",
  },
  {
    id: 3,
    image: "/images/male-ai.jpg",
    name: "John Doe",
    description: "English Teacher",
  },
  {
    id: 4,
    image: "/images/teacher-ai.jpg",
    name: "John Doe",
    description: "English Teacher",
  },
  {
    id: 5,
    image: "/images/teacher-ai.jpg",
    name: "John Doe",
    description: "Graphic Designer",
  },
  {
    id: 6,
    image: "/images/teacher-2.webp",
    name: "John Doe",
    description: "Graphic Designer",
  },
];

const studentsInfo = [
  {
    id: 1,
    image: "/images/female-ai.jpg",
    name: "Mary Smith",
    description:
      "The courses are incredibly well-structured and the instructors are very knowledgeable. I've gained valuable skills that I could immediately apply to my job.",
  },
  {
    id: 2,
    image: "/images/teacher-ai.jpg",
    name: "Joe Thompson",
    description:
      "I was able to switch careers thanks to the comprehensive courses offered here. The interactive content and practical exercises made learning enjoyable and effective.",
  },
  {
    id: 3,
    image: "/images/teacher-2.webp",
    name: "John Doe",
    description:
      " The personalized learning paths were a game changer for me. They helped me stay on track and achieve my goals faster than I anticipated. Absolutely recommend ",
  },
  {
    id: 4,
    image: "/images/male-ai.jpg",
    name: "John Doe",
    description:
      " As a lifelong learner, I appreciate the wide range of subjects available. The courses are insightful and easy to follow, making continuous education a breeze.",
  },
  {
    id: 5,
    image: "/images/male-ai.jpg",
    name: "John Doe",
    description:
      "The certification I earned from E-Learning has been recognized by my employer and has significantly boosted my career prospects. I highly recommend their programs.",
  },
  {
    id: 6,
    image: "/images/male-ai.jpg",
    name: "John Doe",
    description:
      "Connecting with fellow learners in the community has been a highlight for me. The discussions and support have enriched my learning experience beyond the courses themselves.",
  },
];

const degreeInfo = [
  {
    image: "/images/international-degree.jpg",
    description:
      "Our certifications are recognized and trusted by employers and educational institutions around the world. Earning a certification from E-learning signifies a commitment to excellence and proficiency in your field of study. Our rigorous course standards and partnerships with top universities and industry leaders ensure that our degrees hold substantial value in the global job market. This international trust and recognition open doors to career advancements and educational opportunities, making E-learning a reputable and reliable choice for learners everywhere.",
  },
];
//testing
// const buttons = [
//   { name: "All", value: "all" },
//   { name: "Software Engineer", value: "software engineer" },
//   { name: "English Teacher", value: "english teacher" },
//   { name: "Graphic Designer", value: "graphic designer" },
// ];

export default function About() {
  const [filteredProfession, setFilteredProfession] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);

  console.log(filteredProfession);

  useEffect(() => {
    setFilteredProfession(teachersInfo);
  }, []);

  function handleProfession(e) {
    let typeTeacher = e.target.value;

    if (typeTeacher === "all") return setFilteredProfession(teachersInfo);

    const filteredData = teachersInfo.filter(
      (teacherInfo) =>
        teacherInfo.description.toLowerCase() === typeTeacher.toLowerCase(),
    );

    setFilteredProfession(filteredData);
  }
  return (
    <div>
      <NavBar />
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
            link={info.link}
          />
        ))}
      </CardContainer>
      <SectionTitle title="Meet Our Talented Team" id="teachers" />
      <AlignContainer>
        <select
          name="cars"
          id="cars"
          onClick={handleProfession}
          className="m-auto mt-4 rounded-xl bg-[#ffefe2] px-4 py-2 outline-none"
        >
          <option value="all">All</option>
          <option value="software engineer">Software Engineer</option>
          <option value="graphic designer">Graphic Designer</option>
          <option value="english teacher">English Teacher</option>
        </select>
      </AlignContainer>
      <CardContainer>
        {/* <button className="" value={type.value} onClick={handleProfession}>
            {type.name}
          </button>  */}

        {filteredProfession?.map((type) => (
          // <ul>
          //   <li>{type.name}</li>
          // </ul>
          <PeopleCard
            image={type.image}
            name={type.name}
            description={type.description}
          />
        ))}
      </CardContainer>

      <SectionTitle title="Our Students Reviews" id="students" />
      <Swiper
        slidesPerView={2} // default slides per view
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 300,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 300,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 300,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 190,
          },

          1280: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <CardContainer>
          {studentsInfo.map((info) => (
            <SwiperSlide>
              <PeopleCard
                image={info.image}
                name={info.name}
                description={info.description}
              />
            </SwiperSlide>
          ))}
        </CardContainer>
      </Swiper>
      {degreeInfo.map((info) => (
        <AboutUs
          title="International Degree"
          id="degree"
          aboutDescription={info.description}
          aboutImage={info.image}
        />
      ))}
      <Footer />
    </div>
  );
}
