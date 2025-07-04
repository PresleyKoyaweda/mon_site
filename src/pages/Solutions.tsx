import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  BarChart3, 
  AlertTriangle, 
  MessageSquare, 
  TrendingUp, 
  Search, 
  Brain, 
  Settings, 
  Radio, 
  Globe,
  Download,
  Wrench,
  Rocket,
  Cog,
  Activity
} from 'lucide-react';

const Solutions = () => {
  const [activeStep, setActiveStep] = useState(0);

  const solutions = [
    {
      icon: <Bot className="text-blue-600" size={40} />,
      title: 'Systèmes d\'IA sur mesure',
      description: 'Modèles personnalisés pour répondre à des besoins métiers spécifiques (prévision, NLP, scoring…)',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <BarChart3 className="text-purple-600" size={40} />,
      title: 'Tableaux de bord décisionnels',
      description: 'Dashboards Power BI ou Microsoft Fabric pour suivre les KPIs et orienter les décisions',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: <AlertTriangle className="text-red-600" size={40} />,
      title: 'Détection d\'anomalies',
      description: 'Surveillance intelligente de la fraude, des pannes ou des comportements hors-normes',
      color: 'red',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: <MessageSquare className="text-green-600" size={40} />,
      title: 'Chatbots intelligents',
      description: 'Assistants virtuels multilingues via LLMs, LangChain, RAG et intégration d\'API',
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: <TrendingUp className="text-orange-600" size={40} />,
      title: 'Modèles de prédiction',
      description: 'Prévision de la demande, du risque de défaut, du churn ou de la santé',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Search className="text-indigo-600" size={40} />,
      title: 'Moteur de recherche interne',
      description: 'Recherche sémantique augmentée avec RAG, FAISS, Elasticsearch ou LlamaIndex',
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Brain className="text-pink-600" size={40} />,
      title: 'Analyse de texte & NLP/NLU',
      description: 'Extraction d\'information, résumé automatique, classification de sentiment',
      color: 'pink',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: <Settings className="text-gray-600" size={40} />,
      title: 'Pipelines MLOps / CI-CD',
      description: 'De la collecte de données au déploiement avec MLflow, Airflow, Docker, FastAPI',
      color: 'gray',
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      icon: <Radio className="text-yellow-600" size={40} />,
      title: 'Surveillance & Monitoring',
      description: 'Mise en place d\'alertes et de reporting automatisé via Grafana, CloudWatch',
      color: 'yellow',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Globe className="text-teal-600" size={40} />,
      title: 'Applications déployées',
      description: 'Interfaces utilisateurs avec Streamlit, FastAPI ou React pour tester les modèles en direct',
      color: 'teal',
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  const projectSteps = [
    {
      icon: <Download className="text-blue-600" size={32} />,
      title: 'Ingestion & nettoyage des données',
      description: 'Collecte, traitement et structuration des données',
      color: 'blue'
    },
    {
      icon: <Brain className="text-purple-600" size={32} />,
      title: 'Modélisation et entraînement',
      description: 'Entraînement de modèles ML, deep learning, NLP/LLM',
      color: 'purple'
    },
    {
      icon: <AlertTriangle className="text-orange-600" size={32} />,
      title: 'Évaluation & validation rigoureuse',
      description: 'Sélection d\'hyperparamètres, cross-validation, gestion du drift',
      color: 'orange'
    },
    {
      icon: <Wrench className="text-green-600" size={32} />,
      title: 'Packaging du modèle',
      description: 'Export du modèle sous format exploitable : pickle, joblib, ONNX…',
      color: 'green'
    },
    {
      icon: <Rocket className="text-red-600" size={32} />,
      title: 'Déploiement via API',
      description: 'Intégration avec FastAPI, Streamlit, SageMaker ou React',
      color: 'red'
    },
    {
      icon: <Cog className="text-indigo-600" size={32} />,
      title: 'Automatisation CI/CD',
      description: 'Pipelines GitHub Actions, orchestration avec Airflow et Docker',
      color: 'indigo'
    },
    {
      icon: <Activity className="text-pink-600" size={32} />,
      title: 'Monitoring & retraining',
      description: 'Suivi des performances, alertes, feedback loop via MLflow, Grafana, CloudWatch',
      color: 'pink'
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Solutions & Systèmes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les solutions que je peux concevoir et déployer pour transformer vos données en valeur
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${solution.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  {solution.icon}
                  <h3 className="text-lg font-bold mt-3 mb-2">{solution.title}</h3>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full transform -translate-x-6 translate-y-6"></div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-20"
        >
          <h3 className="text-2xl font-bold mb-4">
            Quel que soit votre besoin en science des données
          </h3>
          <p className="text-lg max-w-2xl mx-auto">
            Je peux concevoir une solution robuste, déployée et maintenue avec rigueur.
          </p>
        </motion.div>

        {/* Project Lifecycle Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mise en production & projets end-to-end
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cycle de vie complet d'un projet IA, de la conception au déploiement
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((activeStep + 1) / projectSteps.length) * 100}%` }}
                transition={{ duration: 1 }}
                className="absolute top-1/2 left-0 h-1 bg-blue-500 transform -translate-y-1/2"
              ></motion.div>

              {/* Timeline Steps */}
              <div className="relative flex justify-between items-center">
                {projectSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="flex flex-col items-center cursor-pointer group"
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                        index <= activeStep
                          ? `bg-${step.color}-500 text-white shadow-lg`
                          : 'bg-white border-2 border-gray-300 text-gray-400'
                      }`}
                    >
                      {step.icon}
                    </motion.div>
                    <div className="text-center max-w-xs">
                      <h4 className={`font-bold mb-2 transition-colors ${
                        index <= activeStep ? `text-${step.color}-600` : 'text-gray-500'
                      }`}>
                        {step.title}
                      </h4>
                      <p className={`text-sm transition-colors ${
                        index <= activeStep ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {projectSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="flex items-start space-x-4"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${step.color}-500 text-white flex-shrink-0`}>
                  {step.icon}
                </div>
                <div>
                  <h4 className={`font-bold text-${step.color}-600 mb-2`}>{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Mon expertise couvre l'ensemble du cycle de vie des projets IA
          </h3>
          <p className="text-lg max-w-2xl mx-auto">
            Garantissant des solutions réellement opérationnelles et durables.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Solutions;