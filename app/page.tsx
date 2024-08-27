"use client";

import Home from "@/components/Home";
import Navbar from "@/components/Navbar";

import React from "react";

function page() {
  return (
    <div className="bg-slate-800 h-screen w-full">
      <div className="py-12">
        <Navbar />
      </div>
      <Home />
    </div>
  );
}

export default page;
