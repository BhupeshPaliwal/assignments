import React from "react";
import Nav from "../Components/Nav.js";
import anImage from "./Max_Bounty.jpg";

const AboutMePage = () => (
  <div>
    <header>
      <Nav />
    </header>

    <p className="texthere">
      I am ... Utkarsh Bajpai
      <br />
      <br />
      I am a profound thinker. I would share one of my <br />
      <br />
      ways of living. We generally live as a single entity. <br />
      <br />
      But something unique happens when you take your <br />
      <br />
      mind out of your body and observe yourself as just <br />
      <br />
      another person in the world. You suddenly realize all <br />
      <br />
      your traits, and you are mostly clear about acting in a <br />
      <br />
      situation.
      <br />
      <br />
      So was this interesting ? ... It's upto you to decide !
      <br />
      <br />
    </p>
    <img src={anImage} alt="" />
  </div>
);

export default AboutMePage;
