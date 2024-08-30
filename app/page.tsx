"use client";

import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";

import React from "react";

function page() {
  return (
    <div className="bg-zinc-900 h-screen w-full">
      <div className="py-16">
        <Navbar />
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default page;
