import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    // rename featured rooms to rooms
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    // if loading display loading gif, if not set feeatuired rooms
    return (
      <section className="featured-rooms">
        <Title title="featured suites" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
