import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Brain, Database, Code } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16">
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
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
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Voir mes projets
                <ChevronDown size={20} />
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Me contacter
              </motion.button>
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
  );
};

export default Hero;