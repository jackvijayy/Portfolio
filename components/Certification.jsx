import { Certifications } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Certification = () => {
  return (
    <section className="my-20">
      <div className="flex justify-between items-center my-10">
        <p className="text-[#E4ECFF] text-xl lg:text-3xl">
          Certifications & Participants
        </p>
        {/* <Link
          href="certifications"
          className="bg-black-2 shadow-2xl p-2 rounded-full"
        >
          <ArrowRight color="white" />
        </Link> */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4 lg:gap-5">
        {Certifications.map((item) => (
          <div
            key={item.id}
            className="lg:p-8 p-5 bg-black-1 border border-black-2 rounded-xl flex flex-col justify-start  gap-4 "
          >
            {/* {item.logo && <Image
              src={item.logo}
              alt="logo"
              width={32}
              height={32}
              className=""
            /> } */}
            
            <h2 className="text-xl capitalize">{item.name}</h2>
            <p className="text-txt-1 text-sm text-wrap">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
