import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Brain, Database, Code, ArrowRight, BarChart3 } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Brain className="text-purple-600" size={32} />,
      title: 'Intelligence Artificielle',
      description: 'Développement de modèles ML/DL avancés'
    },
    {
      icon: <Database className="text-blue-600" size={32} />,
      title: 'Science des Données',
      description: 'Analyse, production des statistiques et visualisation de données complexes'
    },
    {
      icon: <Code className="text-green-600" size={32} />,
      title: 'MLOps & DevOps',
      description: 'Déploiement et orchestration de pipelines'
    },
    {
      icon: <BarChart3 className="text-blue-600" size={32} />,
      title: 'BI & DataViz',
      description: 'Tableaux de bord et visualisations interactives'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-2xl sm:text-4xl lg:text-4xl font-bold text-gray-900"

              >
                Salut, je suis{' '}
                <span className="text-blue-600">Presley Koyaweda</span>
                

              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl text-gray-600 font-medium"
              >
              Expert en science des données et intelligence artificielle
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                J’accompagne les entreprises dans la conception, le déploiement et la mise en production de solutions d’<strong>intelligence artificielle</strong> et de <strong>valorisation des données</strong>. 
                Fort d’une expertise complète en <strong>data engineering</strong>, <strong>machine learning</strong>, <strong>NLP</strong>, <strong>MLOps/LLMOps</strong> et <strong>BI</strong>, 
                je transforme les données en leviers d’action concrets à l’aide des technologies modernes et des outils les plus adaptés aux enjeux métier.

                Mon approche couvre l’ensemble du cycle de vie des projets data : collecte et préparation des données, modélisation prédictive, industrialisation des modèles et création de tableaux de bord dynamiques. 
                Mon objectif : concevoir des solutions sur mesure, robustes, évolutives et orientées impact.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    Voir mes projets
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Me contacter
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Avatar/Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-blue-200 rounded-full"
                ></motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <div className="text-white text-center">
                    <Brain size={80} className="mx-auto mb-4" />
                    <div className="text-2xl font-bold">Data Science</div>
                    <div className="text-lg">& Intelligence Artificielle</div>
                  </div>
                </motion.div>
                
                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg"
                >
                  <Database className="text-blue-600" size={24} />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg"
                >
                  <Code className="text-purple-600" size={24} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Domaines d'expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche complète de la science des données, de l'analyse à la mise en production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Prêt à collaborer ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discutons de vos projets en science des données et intelligence artificielle
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
              >
                Commencer un projet
                <ChevronRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;