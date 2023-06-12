import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { useSpring, animated, config } from 'react-spring';
import Modal from 'react-modal';
import profileImage from '../../assets/profileImage.png';
import { Element, scroller } from 'react-scroll';

interface Project {
  id: number;
  name: string;
  image: string;
}
console.log('porfolio scroll', scroller.getActiveLink());

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { id: 1, name: 'Project 1', image: profileImage },
    { id: 2, name: 'Project 2', image: profileImage },
    { id: 3, name: 'Project 3', image: profileImage },
    { id: 4, name: 'Project 4', image: profileImage },
    { id: 5, name: 'Project 5', image: profileImage },
    { id: 6, name: 'Project 6', image: profileImage },
    // Add more projects as needed
  ];

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: config.molasses,
  });

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  return (
    <Element name="portfolio" className="section">
      <section
        id="portfolio"
        className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-800 text-white"
      >
        <animated.div style={fadeIn} className="text-left">
          <h2 className="text-4xl mb-6 font-semibold text-center">
            My Projects
          </h2>

          <Container>
            <Row>
              {projects.map((project) => (
                <Col sm={12} md={6} lg={4} key={project.id} className="mb-4">
                  <div
                    className="transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 object-cover rounded shadow"
                    />
                    <p className="mt-2 text-center">{project.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>

          <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            {/* Project details go here */}
            <h2>{selectedProject?.name}</h2>
            <img src={selectedProject?.image} alt={selectedProject?.name} />
            <button onClick={closeModal}>Close</button>
          </Modal>
        </animated.div>
      </section>{' '}
    </Element>
  );
};

export default Portfolio;
