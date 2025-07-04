import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cloud, Database, BarChart3, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Langages',
      icon: <Code className="text-blue-600" size={32} />,
      skills: ['Python', 'SQL', 'JavaScript', 'Bash'],
      color: 'blue'
    },
    {
      title: 'IA / ML / NLP',
      icon: <Brain className="text-purple-600" size={32} />,
      skills: ['scikit-learn', 'PyTorch', 'Hugging Face', 'Transformers', 'LangChain', 'LlamaIndex'],
      color: 'purple'
    },
    {
      title: 'MLOps / DevOps',
      icon: <GitBranch className="text-green-600" size={32} />,
      skills: ['MLflow', 'Airflow', 'Docker', 'GitHub Actions', 'FastAPI', 'Streamlit', 'SageMaker'],
      color: 'green'
    },
    {
      title: 'Data & BI',
      icon: <BarChart3 className="text-orange-600" size={32} />,
      skills: ['Power BI', 'Microsoft Fabric', 'BigQuery', 'dbt', 'Snowflake'],
      color: 'orange'
    },
    {
      title: 'Cloud & Monitoring',
      icon: <Cloud className="text-indigo-600" size={32} />,
      skills: ['AWS', 'Azure', 'Git', 'GitHub', 'Grafana', 'CloudWatch'],
      color: 'indigo'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="competences" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences Techniques</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise diversifiée en science des données, intelligence artificielle et technologies cloud
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-gradient-to-br from-${category.color}-50 to-${category.color}-100 p-6 rounded-2xl shadow-lg border border-${category.color}-200`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="flex items-center"
                  >
                    <div className={`w-2 h-2 rounded-full bg-${category.color}-500 mr-3`}></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;