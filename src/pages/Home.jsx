import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet'; // Add React Helmet for SEO
import { Github, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
import ShinyText from './ShinyText';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Rakshit Waghmare - Fullstack Web Developer</title>
        <meta
          name="description"
          content="I'm Rakshit Waghmare, a fullstack web developer specializing in React, JavaScript, and UI/UX design. Let's create beautiful and functional web experiences together."
        />
        <meta
          name="keywords"
          content="Rakshit Waghmare, fullstack developer, React developer, web development, JavaScript, UI/UX designer, portfolio, web designer, front-end developer, back-end developer, software engineer, React, Node.js, web development portfolio"
        />
        <meta name="author" content="Rakshit Waghmare" />
        <meta property="og:title" content="Rakshit Waghmare - Fullstack Web Developer" />
        <meta
          property="og:description"
          content="I'm Rakshit Waghmare, a fullstack web developer specializing in React and UI design. I create dynamic and responsive websites with modern web technologies."
        />
        <meta
          property="og:image"
          content="https://your-image-url-here.com/og-image.jpg"
        />
        <meta property="og:url" content="https://your-portfolio-website.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen pt-16 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h1 className="text-5xl font-Tajawal-bold mb-6">
             <ShinyText text =" Hi, I'm"/> <span className="text-gradient text-5xl font-semi-bold"><ShinyText text="Rakshit"/></span>
            </h1>
            <h2 className="text-3xl text-gray-300 mb-8 font-Tajawal">
              Fullstack Web Developer
            </h2>
            <p className="text-gray-400 mb-8 text-lg font-Tajawal">
              <ShinyText text="I create beautiful and functional web experiences using modern
              technologies. Specialized in React and passionate about user
              interface design."/>
            </p>
            <div className="flex space-x-4">
              <Link to="/contact">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="bg-pink-500 text-white px-8 py-3 rounded-lg font-medium"
                >
                  Hire me
                </motion.a>
              </Link>
              <Link to="/projects">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="border border-pink-500 text-pink-500 px-8 py-3 rounded-lg font-medium"
                >
                  View Work
                </motion.a>
              </Link>
            </div>
            <div className="flex space-x-6 mt-8">
              <a
                href="https://github.com/Rakshit-027"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-400 hover:text-pink-500 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/rakshit-waghmare-7060b31a5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-pink-500 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/__rakshit_27__?igsh=cW1qOXZkZjJrOHYz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-500 transition-colors" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="A coding workspace featuring a laptop, notebook, and plant"
              className="rounded-lg shadow-2xl"
              width="600"
              height="400"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
