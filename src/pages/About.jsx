import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet'; // Import React Helmet for SEO
import { Code, Database, Layout, Smartphone, Award, Briefcase, Globe } from 'lucide-react';
import Loader from '../components/Loader';
import ShinyText from './ShinyText';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader className ="Loder-align"/>;
  }

  const skills = [
    { icon: Code, title: 'Frontend Development', description: 'React, Vue, Angular' },
    { icon: Database, title: 'Backend Development', description: 'Node.js, Express, MongoDB' },
    { icon: Layout, title: 'UI/UX Design', description: 'Figma, Adobe XD' },
    { icon: Smartphone, title: 'Mobile Development', description: 'React Native' },
  ];

  const achievements = [
    { icon: Award, title: 'Certifications', description: 'React, JavaScript, UI/UX Design' },
    { icon: Briefcase, title: 'Experience', description: '3+ years in web development' },
    { icon: Globe, title: 'Projects', description: '20+ completed projects' },
  ];

  return (
    <>
      <Helmet>
        <title>About Rakshit Waghmare - Fullstack Developer</title>
        <meta
          name="description"
          content="Learn more about Rakshit Waghmare, a fullstack developer with expertise in frontend, backend, UI/UX design, and mobile development."
        />
        <meta
          name="keywords"
          content="Rakshit Waghmare, about me, fullstack developer, frontend development, backend development, UI/UX design, mobile development"
        />
        <meta name="author" content="Rakshit Waghmare" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-inerit pt-16 px-4 to-gray-800"
      >
        <div className="max-w-7xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-Tajawal-bold mb-4">
              <ShinyText text="About Me" />
            </h1>
            <p className="text-gray-500 max-w-2xl font-Tajawal mx-auto">
              <ShinyText text="I'm a passionate developer with over 2 years of experience in creating web applications. I love turning complex problems into simple, beautiful, and intuitive solutions." />
            </p>
          </motion.div>

          <section aria-labelledby="skills">
            <h2 id="skills" className="sr-only">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <skill.icon className="w-12 h-12 text-pink-500 mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-bold mb-6">
              <ShinyText text="My Journey" />
            </h2>
            <article className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-gray-400 leading-relaxed">
                <ShinyText text="I started my journey as a web developer in 2023, focusing primarily on frontend development. Over the years, I've worked with various technologies and frameworks, constantly learning and adapting to new challenges. My experience includes working with startups and large enterprises, helping them build scalable and maintainable web applications." />
              </p>
            </article>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-bold mb-6">
              <ShinyText text="Achievements" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <achievement.icon className="w-12 h-12 text-pink-500 mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;