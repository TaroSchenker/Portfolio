import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiNpm,
  SiYarn,
  SiWebpack,
  SiBabel,
  SiJest,
  SiEslint,
  SiPrettier,
} from 'react-icons/si'; // Install react-icons
import { Element } from 'react-scroll';

const Skills = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: config.molasses,
  });

  const techSkills = [
    { id: 1, name: 'React', icon: <SiReact size={50} /> },
    { id: 2, name: 'TypeScript', icon: <SiTypescript size={50} /> },
    { id: 3, name: 'Node.js', icon: <SiNodedotjs size={50} /> },
    { id: 4, name: 'JavaScript', icon: <SiJavascript size={50} /> },
    { id: 5, name: 'HTML5', icon: <SiHtml5 size={50} /> },
    { id: 6, name: 'CSS3', icon: <SiCss3 size={50} /> },
    { id: 7, name: 'Redux', icon: <SiRedux size={50} /> },
    { id: 10, name: 'MongoDB', icon: <SiMongodb size={50} /> },
    { id: 11, name: 'PostgreSQL', icon: <SiPostgresql size={50} /> },
    { id: 12, name: 'Docker', icon: <SiDocker size={50} /> },
    { id: 14, name: 'Git', icon: <SiGit size={50} /> },
    { id: 15, name: 'NPM', icon: <SiNpm size={50} /> },
    { id: 16, name: 'Yarn', icon: <SiYarn size={50} /> },
    { id: 17, name: 'Webpack', icon: <SiWebpack size={50} /> },
    { id: 18, name: 'Babel', icon: <SiBabel size={50} /> },
    { id: 19, name: 'Jest', icon: <SiJest size={50} /> },
    { id: 20, name: 'ESLint', icon: <SiEslint size={50} /> },
    { id: 21, name: 'Prettier', icon: <SiPrettier size={50} /> },
    // Add more as needed...
  ];

  return (
    <Element name="skills" className="section">
      <section
        id="skills"
        className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-800 text-white text-center"
      >
        <animated.div style={fadeIn}>
          <h2 className="text-4xl mb-6 font-semibold">Skills</h2>

          <div className="flex flex-wrap justify-center gap-8">
            {techSkills.map((skill) => (
              <div key={skill.id} className="flex flex-col items-center">
                {skill.icon}
                <p className="mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </animated.div>
      </section>{' '}
    </Element>
  );
};

export default Skills;
