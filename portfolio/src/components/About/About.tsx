import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import profileImage from '../../assets/profileImage.png';
const About = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: config.molasses,
  });

  return (
    <section id="about" className="flex flex-col items-center py-20 px-6 sm:px-12 lg:px-24 bg-gray-800 text-white">
      <animated.div style={fadeIn} className="mx-auto max-w-2xl text-left">
        <img src={profileImage} alt="John Smith" className="mx-auto w-48 h-48 rounded-full mb-8" />
        <h2 className="text-4xl mb-6 font-semibold">About Me</h2>
        <p className="text-lg leading-relaxed mb-4">
          Transitioning from a decade in the vibrant music industry, I've applied my organizational skills to the intricate world of software development, sparked by a passion for technology kindled during my studies in Audio & Music Technology.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Since graduating from the Futureproof Tech Training Academy in 2022, I joined YOOX Net-A-Porter as an Associate Software Developer, enhancing software, improving team productivity, and even leading a victorious squad at the 2023 YNAP Hackathon.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Merging my musical background with my tech career, I innovate in the tech scene, while continuing to play guitar, learn the piano, and experiment with audio software in my free time.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Eager for the next act in my tech career, I'm ready for new challenges and excited to harmonise with diverse teams, focusing on crafting user-friendly software solutions. My enduring theme? Growth, innovation, and a lasting impression.
        </p>
      </animated.div>
    </section>
  );
};

export default About;
