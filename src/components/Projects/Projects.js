import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import planetphone from "../../Assets/Projects/planetphone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={planetphone}
              isBlog={false}
              title="PlanetPhone"
              description="PlanetPhone is a dynamic e-commerce platform I personally developed using Laravel and Livewire. Specializing in cutting-edge mobile phones and accessories, it offers users a seamless shopping experience with a focus on innovation, user-friendliness, and security."
              ghLink="https://github.com/StophB/planetphone"
              demoLink="https://github.com/StophB/planetphone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
