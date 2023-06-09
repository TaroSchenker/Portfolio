import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: config.molasses,
  });

  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white px-4 sm:px-0">
      <animated.div style={fadeIn}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-center mb-8">I'm John Smith, a React Developer. Explore my work and feel free to reach out.</p>
        <a href="#portfolio" className="bg-white text-gray-800 py-3 px-6 rounded-full font-bold text-lg md:text-xl lg:text-2xl transition-all hover:bg-gray-700 hover:text-white">View My Work</a>
      </animated.div>
    </section>
  );
};

export default Home;
