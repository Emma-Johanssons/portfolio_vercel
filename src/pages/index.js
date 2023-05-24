import React from "react";
import Navbar from "@/pages/components/navbar";
import Homepage from "@/pages/components/homepage";
import Projects from "@/pages/components/projects";
import Footer from "@/pages/components/footer";

export default function Home() {
  return (
    <div className=" flex w-fit bg-gradient-to-tr from-[#95BBE9] to-[#F1B8D2]">
      <div className="flex flex-col gap-20">
        <Navbar />
        <Homepage />
        <Projects />
        <div className="flex flex-wrap text-center justify-center items-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
