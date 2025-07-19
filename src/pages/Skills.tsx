import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cloud, Database, BarChart3, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
    title: 'Langages de Programmation',
    icon: <Code className="text-blue-600" size={32} />,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'R', level: 93 },
      { name: 'SQL', level: 90 },
      { name: 'DAX', level: 94 },
      { name: 'JavaScript', level: 45 },
      { name: 'Bash', level: 75 },
      { name: 'Autres', level: 50 }
    ],
    color: 'blue'
  },
  {
    title: 'IA / ML / NLP / LLMOps',
    icon: <Brain className="text-purple-600" size={32} />,
    skills: [
      { name: 'scikit-learn', level: 95 },
      { name: 'PyTorch', level: 85 },
      { name: 'Hugging Face', level: 90 },
      { name: 'Transformers', level: 90 },
      { name: 'LangChain', level: 85 },
      { name: 'LLamaIndex', level: 75 },
      { name: 'Wandb', level: 90 }
    ],
    color: 'purple'
  },
  {
    title: 'MLOps / DevOps',
    icon: <GitBranch className="text-green-600" size={32} />,
    skills: [
      { name: 'MLflow', level: 90 },
      { name: 'Airflow', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'FastAPI', level: 90 },
      { name: 'Streamlit', level: 95 },
      { name: 'SageMaker', level: 75 },
      { name: 'CI/CD', level: 85 }
    ],
    color: 'green'
  },
  {
    title: 'Data & Business Intelligence',
    icon: <BarChart3 className="text-orange-600" size={32} />,
    skills: [
      { name: 'Power BI', level: 95 },
      { name: 'Excel-VBA', level: 95 },
      { name: 'Microsoft Fabric', level: 80 },
      { name: 'BigQuery', level: 85 },
      { name: 'dbt', level: 70 },
      { name: 'Snowflake', level: 75 },
      { name: 'Plotly', level: 75 }
    ],
    color: 'orange'
  },
  {
    title: 'Cloud & Monitoring',
    icon: <Cloud className="text-indigo-600" size={32} />,
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Azure', level: 80 },
      { name: 'GCP', level: 75 },
      { name: 'Git', level: 95 },
      { name: 'GitHub', level: 90 },
      { name: 'Grafana', level: 75 },
      { name: 'CloudWatch', level: 70 }
    ],
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
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Compétences Techniques</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise diversifiée en science des données, intelligence artificielle et technologies cloud
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-white rounded-2xl shadow-xl p-8 border-t-4 border-${category.color}-500`}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-gray-900 ml-3">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className={`text-${category.color}-600 font-semibold`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: skillIndex * 0.1, duration: 1 }}
                        className={`bg-${category.color}-500 h-2 rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Compétences Transversales</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Gestion de Projet</h4>
              <p className="text-blue-100">Méthodologies Agile, Scrum, planification, suivi d’avancement</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Communication</h4>
              <p className="text-blue-100">Présentation de résultats, vulgarisation, animation de formations</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Langues</h4>
              <p className="text-blue-100">Français, Anglais, Sango</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;