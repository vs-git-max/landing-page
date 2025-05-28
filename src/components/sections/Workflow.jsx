import React from "react";
import image3 from "../../assets/image3.png";
import { CheckCircle2 } from "lucide-react";

const checkListItems = [
  {
    title: "Code merge mode easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Accelerate your{" "}
        <span className="bg-clip-text bg-gradient-to-r from-orange-400 to-orange-900 text-transparent">
          coding workflow
        </span>
      </h2>

      <div className="flex flex-wrap justify-center items-center ">
        <div className="p-2 w-full lg:w-1/2">
          <img src={image3} alt="code image" />
        </div>
        <div className="p-12 w-full lg:w-1/2">
          {checkListItems.map((item, index) => (
            <div className="flex mb-12" key={index}>
              <div className="flex items-center justify-center size-10 bg-neutral-900 rounded-full text-green-400 mx-6">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
