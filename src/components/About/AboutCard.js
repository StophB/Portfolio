import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mustapha Bousfina </span>
            from <span className="purple"> Morocco.</span>
            <br /> I am a junior full-stack developer
            <br />
            Additionally, I am currently employed as a software developer at
            ******.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Kickboxing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do the hard work especially when you don't fell like it!"{" "}
          </p>
          <footer className="blockquote-footer">Mustapha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
