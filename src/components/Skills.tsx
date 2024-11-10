import React from "react";

const Skills = () => {
  return (
    <div className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
          <p className="text-gray-500 pt-2">
          I have over two years of experience in web development, during which I've worked with two companies and gained extensive knowledge in the IT field. I have experience creating RESTful APIs, integrating APIs, and working with SaaS models, microservices, and multi-tenant applications. I am also familiar with AWS, Docker, Kubernetes, and cloud DevOps.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Node.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">JavaScript</h2>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">Express.js</h2>
              <h2 data-aos="zoom-in-up">Nest.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
