import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, Users, Target } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'M.Ing. Computer Engineering : Data Engineering and Analytics',
      institution: 'Ecole Polytechnique Montréal',
      year: '2024 à 2025',
      location: 'Canada',
      description: 'Formation avancée en intelligence artificielle et science des données, axée sur l’ingénierie des données, les statistiques, le machine learning, le deep learning, le reinforcement learning, le NLP, l’architecture cloud, le déploiement de modèles IA et les pratiques MLOps.'
    },
    {
      degree: 'DEC en Statistique Décisionnelle',
      institution: 'ISSEA',
      year: '2018-2020',
      location: 'Cameroun',
      description: 'Formation axée sur les techniques statistiques, la modélisation et l’analyse opérationnelle de données'
    },
    {
      degree: 'Baccalaureat en Mathématique-Economie',
      institution: 'Université de Bangui',
      year: '2015-2018',
      location: 'Bangui',
      description: 'Solides bases en mathématiques appliquées, probabilités et économie quantitative'
    }
  ];

  const values = [
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: 'Innovation',
      description: 'Curiosité et recherche constante de solutions créatives, efficaces et adaptées aux enjeux actuels.'
    },
    {
      icon: <Users className="text-green-600" size={32} />,
      title: 'Collaboration',
      description: 'Co-construction, partage de savoirs et intelligence collective au service de projets à forte valeur ajoutée.'
    },
    {
      icon: <Award className="text-purple-600" size={32} />,
      title: 'Excellence',
      description: 'Recherche de l’impact maximal à travers la rigueur, la qualité et l’amélioration continue.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">À propos de moi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mon parcours, mes formations et ma vision de la science des données
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mon Histoire</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Passionné par la valorisation des données, l’intelligence artificielle et les   solutions technologiques à impact, 
                  j’ai orienté mes études et mon parcours professionnel vers la science des données et l'itelligence artificielle appliquée. 
                  Mon cheminement m’a permis d’exploiter ces compétences sur le terrain, à travers des projets concrets à fort enjeu au sein d’organisations de renom telles qu’African Parks Network, Maverick Analytik ou encore Desjardins.

                </p>
                <p>
                  Avec 5 années d’expérience dans l’analyse de données, la business intelligence, le développement et la mise en production de modèles analytiques (prédiction, classification, segmentation) et cognitifs (compréhension du langage, 
                  extraction d’information), j’ai développé une expertise solide en ML, DL, RL, NLP/NLU, visualisation interactive, détection d’anomalies, MLOps/LLMOps et systèmes de recommandation. Mes projets personnels, 
                  académiques et professionnels m'ont permis de couvrir l’ensemble du cycle de vie des solutions IA, de la modélisation à l’orchestration complète, dans des environnements complexes et orientés impact.
                </p>
                <p>
                  Aujourd’hui, je conçois des solutions d’intelligence artificielle robustes et déployables, 
                  en veillant à ce qu’elles répondent à des besoins métiers concrets, mesurables et durables. 
                  Mon approche allie excellence technique, compréhension fine des enjeux organisationnels et souci constant de l’impact.
                </p>

                  <p>
                  <strong>Mon ambition :</strong> mettre mon expertise au service d'organisations qui veulent exploiter la puissance des données pour innover, anticiper et agir.
                  </p>


              </div>
            </div>

            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-white text-center">
                  <GraduationCap size={80} className="mx-auto mb-4" />
                  <div className="text-2xl font-bold">Formation Continue</div>
                  <div className="text-lg">& Innovation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Formation Académique</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500"
              >
                <div className="flex flex-wrap items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {edu.year}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <GraduationCap size={16} className="mr-2" />
                  {edu.institution}
                  {edu.location && (
                    <>
                      <MapPin size={16} className="ml-4 mr-1" />
                      {edu.location}
                    </>
                  )}
                </div>
                <p className="text-gray-700">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mes Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;