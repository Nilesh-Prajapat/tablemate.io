import React from "react";
import calender from "../assets/calender.svg";
import { Link } from 'react-router-dom'
import "./home.css";

function Home() {
  return (
    <div className="flex w-full h-screen homeroot">
      {/* Left Section */}
      <section className="w-1/2 h-screen flex justify-center items-center">
        <div className="rounded-4xl p-10 space-y-6 w-11/12 max-w-xl">
          <h1 className="text-4xl font-sans font-bold heading">
            <span>Welcome to</span> <br />
            <span className="logo">TableMate.io</span>
          </h1>

          <h2 className="subtitle text-white font-sans font-semibold">
            Generate a well-guided timetable for your courses. Get started
            now with ease!
          </h2>
          <Link to={"/data"}>
          <button className="px-6 py-2 bg-transparent text-white border-2 border-white rounded-full font-sans font-semibold hover:bg-white hover:text-black transition  ease">
            Continue
          </button>
          </Link>
        </div>
      </section>

      {/* Right Section with Calendar Image */}
      <section className="w-1/2 h-screen flex flex-col  justify-center items-center">
        <div className="h-10/12 w-fit rounded-4xl shadow-xl overflow-hidden">
          <img className="h-full " src={calender} alt="Calendar" />
        </div>
      </section>
    </div>
  );
}

export default Home;
