import React from "react";

import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";
import user5 from "../../assets/user5.jpg";
import user6 from "../../assets/user6.jpg";

const testimonials = [
  {
    user: "John Doe",
    company: "CompanyA",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional and delivered the results beyond expectations.",
  },
  {
    user: "Mary Doe",
    company: "CompanyB",
    image: user2,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional and delivered the results beyond expectations.",
  },
  {
    user: "Pesa Doe",
    company: "CompanyC",
    image: user3,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional and delivered the results beyond expectations.",
  },
  {
    user: "Sammy Doe",
    company: "CompanyD",
    image: user4,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional and delivered the results beyond expectations.",
  },
  {
    user: "Jane Doe",
    company: "CompanyE",
    image: user5,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional and delivered the results beyond expectations.",
  },
  {
    user: "John Smith",
    company: "CompanyF",
    image: user6,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional and delivered the results beyond expectations.",
  },
];

const Testimonials = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl lg:my-20 my-10">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-3">
            <div className="bg-neutral-400/10 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{item.text}</p>
              <div className="flex items-start mt-8">
                <img
                  src={item.image}
                  alt="the image"
                  className="size-12 mr-6  border border-neutral-300 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p>{item.user}</p>
                  <span className="text-neutral-500 font-light text-sm italic">
                    {item.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
