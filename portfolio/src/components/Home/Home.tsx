/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Element } from 'react-scroll';

const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: config.molasses,
  });

  const myRef = useRef<HTMLElement | null>(null);

  const executeScroll = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    executeScroll();
  }, []);

  return (
    <Element name="home" className="section">
      <section
        id="home"
        className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white px-4 pb-80 sm:px-0"
        ref={myRef}
      >
        <animated.div style={fadeIn} className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4">
            Welcome to My Portfolio
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-center mb-8">
            I'm Taro Schenker, a React Developer. Explore my work and feel free
            to reach out.
          </p>
          <a
            href="#portfolio"
            className="bg-white text-gray-800 py-3 px-6 rounded-full font-bold text-lg md:text-xl lg:text-2xl transition-all hover:bg-gray-700 hover:text-white"
          >
            View My Work
          </a>
        </animated.div>
      </section>
    </Element>
  );
};

export default Home;
