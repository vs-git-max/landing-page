import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.png";

const des = [
  { image: image1, description: "This is a test description" },
  { image: image2, description: "This is the second test description" },
];

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools{" "}
        <span className="bg-gradient-to-r from-orange-400 to-orange-900 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-3xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-400 to-orange-900 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="" className="py-3 px-4 rounded-md border border-white">
          Documentation
        </a>
      </div>
      <div className="flex justify-center space-x-6 flex-col lg:flex-row gap-4 lg:gap-0">
        {des.map((item, index) => (
          <div
            className="overflow-hidden border border-orange-500 rounded-md max-w-2xl"
            key={index}
          >
            <img src={item.image} alt="image" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
