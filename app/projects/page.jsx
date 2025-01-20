import { projectsAlt } from "@/constants";
import React from "react";

const page = () => {
  return (
    <section
      className="bg-black p-5 lg:p-10 flex justify-center items-center overflow-hiddden
    "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsAlt.map((item) => (
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 border border-black-2 px-5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0">
              <img
                src={item.spotlight}
                alt="spotlight"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            <div
              className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
              style={item.logoStyle}
            >
              <img className="w-10 h-10 shadow-sm" src={item.logo} alt="logo" />
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className="text-white text-2xl font-semibold animatedText">
                {item.title}
              </p>

              <p className="text-txt-1">{item.desc}</p>
              <p className="text-txt-1">{item.subdesc}</p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {item.tags.map((tag, index) => (
                  <div key={index} className="">
                    <img src={tag.path} alt={tag.name} width={34} height={34} />
                  </div>
                ))}
              </div>

              <a
                className="flex items-center gap-2 cursor-pointer text-white-600"
                href={item.href}
              >
                <p>Check Live Site</p>
                <img
                  src="/images/arrow-up.png"
                  alt="arrow"
                  className="w-3 h-3"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
