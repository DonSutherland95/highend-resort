import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { FaGamepad, FaUmbrellaBeach, FaUtensils, FaSpa } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaSpa />,
        title: "Day Spa",
        info:
          "Our Day Spa is a wellness program designed for guests who want to enjoy massages, facials, and treatments more often.",
      },
      {
        icon: <FaGamepad />,
        title: "Game Room",
        info:
          "Enjoy pool, ping pong, foosball, and air hockey in our game room",
      },
      {
        icon: <FaUtensils />,
        title: "Free breakfast",
        info: "Enjoy our complimentary breakfast from 7am-9am",
      },
      {
        icon: <FaUmbrellaBeach />,
        title: "Beach",
        info: "Relax and get your tan on in our very own privately owned beach",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
