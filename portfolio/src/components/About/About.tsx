import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import profileImage from '../../assets/profileImage.png';
import { Element, scroller } from "react-scroll";
const About = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: config.molasses,
  });

  return (
    <section id="about" className="flex flex-col items-center py-20 pb-40 px-6 sm:px-12 lg:px-24 bg-gray-800 text-white">
      <animated.div style={fadeIn} className="mx-auto max-w-2xl text-left">
           <Element name="about" className="section">
        <img src={profileImage} alt="John Smith" className="mx-auto w-48 h-48 rounded-full mb-8" />
            </Element>
        <h2 className="text-4xl mb-6 font-semibold">About Me</h2>
 
        <p className="text-lg leading-relaxed mb-4">
        Transitioning from a decade in the music industry, I've brought my unique perspective and organizational skills to software development.
        
        </p>
        <p className="text-lg leading-relaxed mb-4">
        After graduating from the Futureproof Tech Training Academy in 2022, I joined YOOX Net-A-Porter as an Associate Software Developer, where I led a victorious team at the 2023 YNAP Hackathon. 
        </p>
        <p className="text-lg leading-relaxed mb-4">
        I thrive on innovation and growth, leveraging my musical background to bring creative solutions to tech. I enjoy learning musical instruments and experimenting with audio software in my free time. 
        </p>
        <p className="text-lg leading-relaxed mb-4">
        I'm excited to face new challenges in my tech career, harmonising with diverse teams to craft user-friendly software solutions.
        </p>
      </animated.div>
    </section>
  );
};

export default About;
