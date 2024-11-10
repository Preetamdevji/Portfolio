import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Doctor Website",
    desc: "A Next.Js & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/doctor-website-templates.jpg",
    tags: ["Next.Js", "Node", "RESTful API", "SCSS"],
  },
  {
    id: 1,
    title: "Point of Sale",
    desc: "A Next.Js & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/pos.jpg",
    tags: ["Next.Js", "Node", "RESTful API", "SCSS"],
  },
  {
    id: 2,
    title: "Billing Portal",
    desc: "A Next.Js & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/billing-portal.jpg",
    tags: ["Next.Js", "Node", "RESTful API", "SCSS"],
  },
  {
    id: 3,
    title: "News Website",
    desc: "A Next.Js & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/newstar.jpg",
    tags: ["Next.Js", "Node", "RESTful API", "SCSS"],
  },
  {
    id: 4,
    title: "E-commerce",
    desc: "A Next.Js & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/web-design-ecommerce.jpg",
    tags: ["Next.Js", "Node", "RESTful API", "SCSS"],
  },
  {
    id: 5,
    title: "HRM",
    desc: "A Next.Js & Node Based website to help you find what dishes you can make if u have certain ingredients",
    img: "/hrm.jpg",
    tags: ["Next.Js", "Node", "RESTful API", "SCSS"],
  },
];

const Projects = () => {
  return (
    <div className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
