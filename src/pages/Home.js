import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeturedRooms from "../components/FeaturedRooms";
export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="High-End Suites"
          subtitle="deluxe suites starting at $300"
        >
          <Link to="/rooms" className="btn-primary">
            our suites
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeturedRooms />
    </>
  );
}
