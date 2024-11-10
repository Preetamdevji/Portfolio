import React from "react";
import Heading from "./Heading";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    companyName: "LOGON",
    desc: `"I joined LOGON BROADBAND as an intern, where I had the opportunity to learn from my senior colleagues. Through this experience, I transitioned to a Junior Backend Developer role, collaborating closely with the team and honing my skills in SQL databases and Laravel. Working as a team member, we developed service-based web applications for LOGON, which significantly enhanced my technical abilities and my understanding of backend development."`,
    img: "/preetam.jpg",
    name: "Preetam Devji",
    designation: "Junior PHP Laravel Developer",
  },
  {
    companyName: "KAJ Consultancy",
    desc: `"At KAJ Consultancy, I was hired as a MERN Stack Developer, where I transitioned from PHP/Laravel to the MERN stack, expanding my technical expertise and adaptability. In collaboration with a dedicated two-member team, we developed a POS system tailored for the company, allowing me to work extensively with SaaS architecture and microservices. This role provided hands-on experience in modern web technologies and enhanced my programming knowledge, equipping me with practical skills in scalable application design and development."`,
    img: "/preetam.jpg",
    name: "Preetam Devji",
    designation: "MERN Stack Developer",
  }
];

const Testimonials = () => {
  return (
    <div className="container pt-32">
      <Heading title="Testimonials" />
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {testimonialData.map((item, index) => (
          <TestimonialCard
            key={index}
            companyName={item.companyName}
            desc={item.desc}
            img={item.img}
            name={item.name}
            designation={item.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
