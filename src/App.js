import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/CampaignPage";

export default function App() {
  return (
    <div className="relative sm:-8 p-4 bg-[#fff] min-h-screen flex flex-row">
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <HomePage />
      </div>
    </div>
  );
}
