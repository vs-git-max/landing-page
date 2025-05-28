import React from "react";

const resourcesLinks = [
  { label: "Download", link: "#" },
  { label: "API Reference", link: "#" },
  { label: "Community Forums", link: "#" },
];
const platformsLinks = [
  { label: "Features", link: "#" },
  { label: "Supported devices", link: "#" },
  { label: "Systems Requirements", link: "#" },
  { label: "Downloads", link: "#" },
  { label: "Release notes", link: "#" },
];
const communityLinks = [
  { label: "Events", link: "#" },
  { label: "Meetups", link: "#" },
  { label: "Conferences", link: "#" },
  { label: "Hackathons", link: "#" },
  { label: "Jobs", link: "#" },
];

const Footer = () => {
  return (
    <div className="mt-12 bg-neutral-400/10  rounded-xl border-t border-neutral-700 p-20">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl ">Resources Links</h2>
          <div className="flex items-start justify-between flex-col gap-3 mt-5">
            {resourcesLinks.map((item, index) => (
              <a
                key={index}
                className="text-neutral-500 font-normal hover:text-neutral-300 transition duration-300 tracking-tight"
                href={item.link}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl "></h2>Platforms Links
          <div className="flex items-start justify-between flex-col gap-3 mt-5">
            {platformsLinks.map((item, index) => (
              <a
                key={index}
                className="text-neutral-500 font-normal hover:text-neutral-300 transition duration-300 tracking-tight"
                href={item.link}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl ">Community Links</h2>
          <div className="flex items-start justify-between flex-col gap-3 mt-5">
            {communityLinks.map((item, index) => (
              <a
                key={index}
                className="text-neutral-500 font-normal hover:text-neutral-300 transition duration-300 tracking-tight"
                href={item.link}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
