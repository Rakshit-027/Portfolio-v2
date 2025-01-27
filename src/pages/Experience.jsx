import React from 'react';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';
import { Calendar, Building2, GraduationCap, Award } from 'lucide-react';
import { useState,useEffect } from 'react';

const Experience = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 1.5 seconds delay

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Campus Marg India.',
      period: '2022 - 2023',
      description: 'Led the frontend development team in delivering high-performance web applications using React and TypeScript. Implemented performance optimization strategies, resulting in a 40% boost in application speed. Focused on maintaining best practices for code quality, scalability, and collaboration, driving efficiency across the development process.',
      icon: Building2,
    },
    {
      title: 'Frontend Developer',
      company: 'SS Infotech',
      period: '2023 - 2024',
      description: 'Developed and maintained responsive web applications, collaborating closely with UX designers to enhance user experience. Played a key role in implementing continuous integration and continuous deployment (CI/CD) pipelines, ensuring efficient development workflows and seamless delivery of updates.',
      icon: Calendar,
    },
    {
      title: 'Development Head',
      company: 'StackAura',
      period: '2025 - Current',
      description: 'Spearheading the design and development of cutting-edge web applications tailored to client needs, leveraging technologies such as React and Node.js. Overseeing end-to-end project lifecycle management, ensuring seamless collaboration between teams and delivering high-quality, scalable solutions.',
      icon: GraduationCap,
    }
  ];

  const certifications = [
    {
      title: 'JavaScript: From First Steps to Professional',
      issuer: 'Anjana Vakil',
      year: '2023',
      description: 'Mastering advanced React patterns for cleaner, more maintainable code.Harnessing the full power of hooks to manage state, side effects, and context.Optimizing React applications for better performance and faster rendering',
    },
    {
      title: 'Know About Git',
      issuer: 'ThePrimeagen',
      year: '2023',
      description: "I learned how to create and manage repositories, branch for parallel development, and resolve conflicts using merge and rebase. I explored advanced Git techniques such as interactive rebasing to clean up commit history, bisecting to identify problematic commits, utilizing worktrees, and navigating the reflog. By understanding Git's architecture and inner workings, I gained the confidence to handle any Git-related issue and become a valuable asset to large-scale projects.",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development, showcasing my growth and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg flex items-start gap-6"
            >
              <div className="bg-pink-500/10 p-3 rounded-lg">
                <exp.icon className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-pink-500 mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Award className="w-6 h-6 text-pink-500 mr-2" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                <p className="text-pink-500 text-sm mb-2">{cert.issuer} • {cert.year}</p>
                <p className="text-gray-400">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;