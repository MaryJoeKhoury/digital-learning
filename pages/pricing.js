import { useState } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import LandingSection from "@/components/LandingSection";
import Accordion from "@/components/Accordion";

const pricingLanding = [
  {
    image: "/images/pricing.png",

    text: "Affordable Prices for Higth Quality Learning",
  },
];

const accordionInfo = [
  {
    id: "1",
    title: "Payment Options",
    details:
      "Accepted payment methods typically include credit cards (Visa, MasterCard, American Express) and digital wallets like PayPal. We offer flexible installment plans and discounts for longer subscription durations. Billing cycles can be monthly, annually, or customized to suit your needs.",
  },
  {
    id: "2",
    title: "Free Trial or Demo",
    details:
      "Accessing our free trial or demo is simple. You can sign up directly on our website to start exploring our platform. The trial period lasts for 14 days, during which you'll have full access to all courses and features available to our subscribers.",
  },
  {
    id: "3",
    title: "Cancellation Policy",
    details:
      "Should you choose to cancel your subscription, you can easily do so through your account settings or by contacting our customer support team. Our refund policy ensures that you may be eligible for a refund under certain conditions. Please note any notice periods or specific requirements for cancellation.",
  },
  {
    id: "4",
    title: "Student or Group Discounts",
    details:
      "We offer special discounts for students and groups. To qualify, students may need to provide valid student identification, while groups may need to meet a minimum number of members. Applying for these discounts is straightforward and can be done during the subscription process. Terms and conditions apply.",
  },
];

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="">
      <NavBar />
      {pricingLanding.map((info) => (
        <>
          <LandingSection image={info.image} text={info.text} />
        </>
      ))}
      {accordionInfo.map((info) => (
        <Accordion
          key={info.id}
          title={info.title}
          details={info.details}
          isOpen={activeIndex === info.id}
          onClick={() => handleItemClick(info.id)}
        />
      ))}

      <Footer />
    </div>
  );
}
