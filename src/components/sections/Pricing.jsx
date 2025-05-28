import { CheckCircle2 } from "lucide-react";
import React from "react";

const pricingOptions = [
  {
    title: "Free",
    price: 0,
    features: [
      "Private board sharing",
      "5 GB storage",
      "Web analytics",
      "Private mode",
    ],
  },
  {
    title: "Pro",
    price: 10,
    features: [
      "Private board sharing",
      "10 GB storage",
      "Web analytics",
      "Private mode",
    ],
  },
  {
    title: "Expert",
    price: 20,
    features: [
      "Private board sharing",
      "15 GB storage",
      "Web analytics",
      "Private mode",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>

      <div className="flex flex-wrap">
        {pricingOptions.map((item, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
            <div className="p-10 border-1 border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {item.title}

                {item.title === "Pro" && (
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-400 text-sm ml-3">
                    (Most Popular Plan)
                  </span>
                )}
              </p>
              <p className="mb-8 ">
                <span className="text-5xl mt-6 mr-2">$ {item.price}</span>
                <span className="text-neutral-400 tracking-tight">/month</span>
              </p>
              <ul>
                {item.features.map((item, index) => (
                  <li key={index} className="flex items-center mt-8">
                    <CheckCircle2 />
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={` inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl  hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-300 ${
                  item.title === "Pro" ? "bg-orange-700/15" : null
                }`}
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
