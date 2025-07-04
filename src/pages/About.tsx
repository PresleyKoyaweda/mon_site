import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, Users, Target, Building, Globe, Briefcase, Brain, BarChart3, AlertTriangle, Settings, TrendingUp, Database } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'M.Ing. Computer Engineering : Data Engineering and Analytics',
      institution: 'Polytechnique Montréal',
      year: '2024-2025',
      location: 'Montréal, QC, Canada',
      description: 'Spécialisation en science des données, apprentissage automatique, NLP et MLOps',
      icon: '🎓',
      color: 'blue'
    },
    {
      degree: 'Baccalauréat en Statistique Décisionnelle',
      institution: 'ISSEA',
      year: '2018-2020',
      location: 'Afrique Centrale',
      description: 'Fondements solides en mathématiques appliquées, statistique inférentielle et modélisation prédictive',
      icon: '📊',
      color: 'purple'
    },
    {
      degree: 'Baccalauréat en Mathématique et Économie',
      institution: 'Université de Bangui',
      year: '2015-2018',
      location: 'République Centrafricaine',
      description: 'Bases en analyse quantitative et raisonnement économique',
      icon: '📐',
      color: 'green'
    }
  ];

  const experience = [
    {
      company: 'Desjardins',
      role: 'Projets IA & MLOps',
      description: 'Développement et déploiement de solutions d\'intelligence artificielle dans l\'écosystème financier, avec mise en place de pipelines MLOps robustes',
      icon: <Building className="text-blue-600" size={24} />,
      color: 'blue'
    },
    {
      company: 'Maverick Analytik',
      role: 'Accompagnement PME',
      description: 'Conception de solutions analytiques sur mesure pour optimiser les performances et la croissance des petites et moyennes entreprises',
      icon: <Target className="text-green-600" size={24} />,
      color: 'green'
    },
    {
      company: 'African Parks Network',
      role: 'Projets environnement',
      description: 'Analyse de données critiques pour la conservation de la biodiversité et la protection des écosystèmes africains',
      icon: <Globe className="text-purple-600" size={24} />,
      color: 'purple'
    }
  ];

  const specializations = [
    {
      icon: <Brain className="text-purple-600" size={32} />,
      title: 'NLP/NLU',
      description: 'Traitement du langage naturel et compréhension automatique'
    },
    {
      icon: <BarChart3 className="text-blue-600" size={32} />,
      title: 'Visualisation Interactive',
      description: 'Dashboards et interfaces utilisateur pour l\'exploration de données'
    },
    {
      icon: <AlertTriangle className="text-red-600" size={32} />,
      title: 'Détection d\'Anomalies',
      description: 'Surveillance intelligente et identification de patterns anormaux'
    },
    {
      icon: <Settings className="text-green-600" size={32} />,
      title: 'MLOps',
      description: 'Orchestration et déploiement de modèles en production'
    },
    {
      icon: <TrendingUp className="text-orange-600" size={32} />,
      title: 'Systèmes de Recommandation',
      description: 'Algorithmes personnalisés pour l\'optimisation des choix'
    },
    {
      icon: <Database className="text-indigo-600" size={32} />,
      title: 'Valorisation de la Donnée',
      description: 'Transformation des données brutes en insights actionnables'
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
            Découvrez mon parcours, mes expériences et ma vision de la science des données
          </p>
        </motion.div>

        {/* Main Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mon Parcours</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Passionné par la valorisation des données, l'intelligence artificielle et les solutions 
                  technologiques à impact, j'ai orienté mes études et mon parcours professionnel vers la 
                  science des données appliquée. Mon cheminement m'a permis d'exploiter ces compétences 
                  sur le terrain, à travers des projets à fort enjeu au sein d'organisations de renom 
                  telles qu'African Parks Network, Maverick Analytik ou encore Desjardins.
                </p>
                <p>
                  Avec plus de 4 années d'expérience dans l'analyse de données, la business intelligence 
                  et la mise en production de modèles IA, j'ai développé une expertise solide en NLP/NLU, 
                  visualisation interactive, détection d'anomalies, MLOps et systèmes de recommandation.
                </p>
                <p>
                  Mes projets personnels, académiques et professionnels m'ont permis de passer de la 
                  modélisation à l'orchestration complète de solutions IA end-to-end, dans des 
                  environnements exigeants et concrets.
                </p>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-white text-center">
                  <Briefcase size={80} className="mx-auto mb-4" />
                  <div className="text-2xl font-bold">4+ années</div>
                  <div className="text-lg">d'expérience</div>
                  <div className="text-sm mt-2 opacity-90">Data Science • IA • MLOps</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Expérience Professionnelle</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-white rounded-xl shadow-lg p-6 border-l-4 border-${exp.color}-500`}
              >
                <div className="flex items-center mb-4">
                  {exp.icon}
                  <div className="ml-3">
                    <h3 className="font-bold text-gray-900">{exp.company}</h3>
                    <p className={`text-${exp.color}-600 font-medium`}>{exp.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specializations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Spécialisations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="mb-4 flex justify-center">
                  {spec.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{spec.title}</h3>
                <p className="text-gray-600 text-sm">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
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
                className={`bg-white rounded-xl shadow-lg p-6 border-l-4 border-${edu.color}-500`}
              >
                <div className="flex flex-wrap items-start justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{edu.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {edu.year}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <GraduationCap size={16} className="mr-2" />
                  <span className="font-medium">{edu.institution}</span>
                  <MapPin size={16} className="ml-4 mr-1" />
                  <span>{edu.location}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Vision et Approche</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Je conçois et déploie des solutions de science des données et d'intelligence artificielle 
            sur mesure, avec une approche rigoureuse, moderne et orientée résultats.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;