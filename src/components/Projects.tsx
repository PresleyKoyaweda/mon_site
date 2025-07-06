import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Heart, Zap, MessageSquare, Shield } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Détection d\'AVC en temps réel',
      description: 'Modèle ML avec Streamlit et MLflow pour la détection en direct du risque d\'AVC.',
      longDescription: 'Système de prédiction avancé utilisant des algorithmes de machine learning pour évaluer le risque d\'AVC en temps réel. Interface utilisateur intuitive développée avec Streamlit et pipeline MLOps complet avec MLflow.',
      stack: ['Python', 'MLflow', 'Streamlit', 'FastAPI'],
      icon: <Heart className="text-red-500" size={32} />,
      color: 'red',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: 'https://prediction-du-risque-d-avc-presley.streamlit.app/',
      githubUrl: 'https://github.com/PresleyKoyaweda'
    },
    {
      id: 2,
      title: 'Évaluation du défaut de crédit',
      description: 'Système de scoring automatisé via XGBoost, orchestration avec Airflow, CI/CD avec GitHub Actions.',
      longDescription: 'Plateforme complète d\'évaluation du risque de crédit utilisant XGBoost pour la prédiction, avec orchestration automatisée via Airflow et déploiement continu via GitHub Actions.',
      stack: ['Python', 'XGBoost', 'Airflow', 'GitHub Actions'],
      icon: <Shield className="text-green-500" size={32} />,
      color: 'green',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: 'https://credit-scoring-project-presley-k-project.streamlit.app/',
      githubUrl: 'https://github.com/PresleyKoyaweda'
    },
    {
      id: 3,
      title: 'Segmentation de la clientèle bancaire',
      description: 'Analyse et segmentation avancée de la clientèle bancaire pour optimiser les stratégies marketing.',
      longDescription: 'Solution complète de segmentation client utilisant des techniques de machine learning non supervisé pour identifier les profils clients et optimiser les stratégies commerciales.',
      stack: ['Python', 'scikit-learn', 'Streamlit', 'Pandas'],
      icon: <MessageSquare className="text-blue-500" size={32} />,
      color: 'blue',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: 'https://segmentation-de-la-clientele-bancaire-presley-project.streamlit.app/',
      githubUrl: 'https://github.com/PresleyKoyaweda'
    },
    {
      id: 4,
      title: 'Gouvernance des données',
      description: 'Tableau de bord Power BI pour le suivi des règles et de la qualité des données.',
      longDescription: 'Solution complète de gouvernance des données avec tableaux de bord Power BI interactifs, pipeline de transformation dbt et intégration BigQuery pour le monitoring de la qualité des données.',
      stack: ['Power BI', 'dbt', 'BigQuery'],
      icon: <Zap className="text-purple-500" size={32} />,
      color: 'purple',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: 'https://github.com/PresleyKoyaweda'
    }
  ];

  return (
    <section id="projets" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projets Réalisés</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes réalisations en science des données et intelligence artificielle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className={`bg-${project.color}-500 p-2 rounded-full shadow-lg`}>
                    {project.icon}
                  </div>
                </div>
                {project.liveUrl !== '#' && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      En ligne
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm font-medium rounded-full bg-${project.color}-100 text-${project.color}-700`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.liveUrl !== '#' && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      Voir le projet
                    </motion.a>
                  )}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    Code source
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center mb-6">
                  {selectedProject.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">{selectedProject.title}</h3>
                </div>
                
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm font-medium rounded-full bg-${selectedProject.color}-100 text-${selectedProject.color}-700`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {selectedProject.liveUrl !== '#' && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Voir le projet
                    </motion.a>
                  )}
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
                  >
                    <Github size={16} />
                    Code source
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;