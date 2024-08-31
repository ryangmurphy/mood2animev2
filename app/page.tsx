"use client";

import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";

import React from "react";

function page() {
  return (
    <div className="bg-zinc-900 h-screen w-full overflow-x-hidden">
      <div className="pt-16 px-4">
        <Navbar />
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default page;
