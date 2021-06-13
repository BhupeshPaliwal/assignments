import React from "react";
import Nav from "../Components/Nav.js";
//import { Redirect } from "react-router-dom";
import anImage from "./pilani.jpg";

function HomePage() {
  //put {authorized} as prop

  // if(!authorized){
  // 	return (<Redirect to="/" />);
  // }

  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="box">
        <img src={anImage} alt="" />
        <p className="texthere">
          Do you ever wonder why the new academic block
          <br />
          <br /> (NAB) is built below actual ground level?
          <br />
          <br />
          <br />
          An exciting story suggests that during the foundation
          <br />
          <br /> of BITS Pilani, a Priest told that the clocktower and
          <br />
          <br /> the Saraswati Temple should be directly in front of
          <br />
          <br /> each other; no building should come between them.
          <br />
          <br />
          <br />
          And hence the complete NAB area, one of the most
          <br />
          <br /> beautiful locations on the Pilani campus, was built.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
