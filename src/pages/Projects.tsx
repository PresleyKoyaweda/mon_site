import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Heart,
  Zap,
  MessageSquare,
  Shield,
  X,
  TextSearch,
  ServerCog,
  Server,
  CloudLightning,
  BarChart3,
  TrendingUp,
  ActivitySquare,
  Activity,
  TextQuote,
  Users,
  Film,
  Languages,
  Search,
  Camera,
  BookOpen,
  ServerCrash,
  HardDrive,
  Database
} from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Détection d\'AVC en temps réel',
      description: 'Modèle ML avec Streamlit et MLflow pour la détection en direct du risque d\'AVC.',
      longDescription: 'Système de prédiction avancé utilisant des algorithmes de machine learning pour évaluer le risque d\'AVC en temps réel. Interface utilisateur intuitive développée avec Streamlit et pipeline MLOps complet avec MLflow pour le suivi des modèles et des performances.',
      stack: ['Python', 'MLflow', 'Streamlit', 'FastAPI', 'scikit-learn'],
      category: 'ml',
      icon: <Heart className="text-red-500" size={32} />,
      color: 'red',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: 'https://prediction-du-risque-d-avc-presley.streamlit.app/',
      githubUrl: 'https://github.com/PresleyKoyaweda/Prediction-du-risque-d-AVC',
      features: [
        'Prédiction en temps réel du risque d\'AVC',
        'Interface utilisateur intuitive avec Streamlit',
        'Pipeline MLOps avec MLflow',
        'API REST avec FastAPI',
        'Monitoring des performances du modèle'
      ]
    },
    {
      id: 2,
      title: 'Évaluation du défaut de crédit',
      description: 'Système de scoring automatisé via XGBoost, orchestration avec Airflow, CI/CD avec GitHub Actions.',
      longDescription: 'Plateforme complète d\'évaluation du risque de crédit utilisant XGBoost pour la prédiction, avec orchestration automatisée via Airflow et déploiement continu via GitHub Actions. Solution robuste pour l\'industrie financière.',
      stack: ['Python', 'XGBoost', 'Airflow', 'GitHub Actions', 'Docker'],
      category: 'ml',
      icon: <Shield className="text-green-500" size={32} />,
      color: 'green',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: 'https://credit-scoring-project-presley-k-project.streamlit.app/',
      githubUrl: 'https://github.com/PresleyKoyaweda/credit-scoring-project',
      features: [
        'Modèle XGBoost pour le scoring de crédit',
        'Orchestration automatisée avec Airflow',
        'Pipeline CI/CD avec GitHub Actions',
        'Containerisation avec Docker',
        'Monitoring et alertes automatiques'
      ]
    },
    {
      id: 3,
      title: 'Segmentation de la clientèle bancaire',
      description: 'Analyse et segmentation avancée de la clientèle bancaire pour optimiser les stratégies marketing.',
      longDescription: 'Solution complète de segmentation client utilisant des techniques de machine learning non supervisé pour identifier les profils clients et optimiser les stratégies commerciales. Interface interactive développée avec Streamlit.',
      stack: ['Python', 'scikit-learn', 'Streamlit', 'Pandas', 'Plotly'],
      category: 'ml',
      icon: <MessageSquare className="text-blue-500" size={32} />,
      color: 'blue',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: 'https://segmentation-de-la-clientele-bancaire-presley-project.streamlit.app/',
      githubUrl: 'https://github.com/PresleyKoyaweda/Segmentation-de-la-clientele-Bancaire',
      features: [
        'Algorithmes de clustering avancés',
        'Visualisations interactives avec Plotly',
        'Interface Streamlit pour l\'exploration',
        'Analyse des profils clients',
        'Recommandations stratégiques'
      ]
    },
    
    {
  id: 4,
  title: 'TP1 Data Mining: Duplicate Bug Report Detection',
  description: 'Détection de rapports de bogues dupliqués par traitement automatique du langage',
  longDescription: `Ce projet académique portait sur la détection automatique de rapports de bogues dupliqués dans un système de suivi de bogues. Après extraction des données HTML par scraping, les résumés et descriptions des rapports ont été prétraités (tokenisation, stop words, stemming) puis représentés via TF-IDF et word embeddings. Le système évalue la similarité entre paires de rapports grâce à la similarité cosinus. Ces mesures, enrichies de comparaisons sur les composants et produits, ont été utilisées comme features d’un modèle de régression logistique pour prédire les duplicatas. Une étude d’ablation a permis d’évaluer l’importance de chaque feature.`,
  stack: ['Python', 'NumPy', 'NLTK', 'Web Scraping', 'TF-IDF', 'Word Embedding'],
  category: 'nlp',
  icon: <Zap className="text-fuchsia-600" size={32} />,
  color: 'fuchsia',
  image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  liveUrl: null,
  githubUrl: null,
  features: [
    'Scraping de rapports HTML de bogues open source',
    'Extraction des champs textuels pertinents',
    'Nettoyage, tokenisation, stop words, stemming',
    'Représentation TF-IDF et Word Embeddings (GloVe)',
    'Calcul de similarité cosinus (résumé & description)',
    'Modélisation par régression logistique',
    'Étude d’ablation sur l’impact des features'
  ],
  notice: 'Projet académique – non déployé en ligne'
},
    {
  id: 5,
  title: "TP2 Data Mining: Fouille de réseaux sociaux : LPAm+ & influence",
  description: "Implémentation de l’algorithme LPAm+ pour la détection de communautés dans des graphes Marvel, et mesure d’influence dans des réseaux sociaux avec NetworkX.",
  longDescription: `
Ce TP explore deux aspects de l’analyse des réseaux sociaux :
- La détection de communautés à l’aide de l’algorithme LPAm+ (Label Propagation + Merge),
- L'identification des personnages les plus influents dans un réseau social issu de l’univers Marvel.

Les étudiants implémentent un pipeline utilisant NetworkX et analysent des graphes basés sur des fichiers CSV (nœuds et arêtes).
  `,
  stack: ["Python", "NetworkX", "Graph Mining"],
  category: "ml",
  icon: "Share2",
  color: "indigo",
  image: "https://www.agence-graphisme-lyon.fr/wp-content/uploads/2024/03/Comment_le_design_des_reseaux_sociaux_influence_t_il_le_monde_High_Tech_-768x432.jpg",
  liveUrl: null,
  githubUrl: 'nullhttps://github.com/PresleyKoyaweda/Communities-Detection',
  features: [
    "Lecture et traitement de fichiers CSV de graphes",
    "Détection de communautés via LPAm+",
    "Fusion de communautés selon la modularité",
    "Mesure de l'influence via centralité et autres métriques",
    "Visualisation du graphe et des communautés"
  ],
  notice: "Projet exécuté en local sans interface publique"
},
    {
  id: 6,
  title: "TP3 - Market Basket Analysis (GCP + Spark)",
  description: "Analyse de règles d'association à grande échelle via PySpark sur Google Cloud Platform.",
  longDescription: `Ce TP visait à exécuter une analyse de type Market Basket Analysis (MBA) sur un jeu de données massif via un cluster Spark sur Google Cloud Platform. Nous avons utilisé un cluster Dataproc haute capacité configuré avec 1 nœud maître (n1-highmem-16) et 2 nœuds de calcul (n1-highcpu-32), afin de traiter plusieurs millions d’observations médicales. L’objectif était de générer des règles d’association à partir de transactions de symptômes pour découvrir des cooccurrences significatives, notamment dans le contexte de pharmacovigilance.`,
  stack: ['PySpark', 'Google Cloud Platform', 'Dataproc', 'RDD', 'SQL'],
  category: 'ml',
  icon: <Zap className="text-orange-500" size={32} />,
  color: 'orange',
  image: 'https://images.pexels.com/photos/8353802/pexels-photo-8353802.jpeg?auto=compress&cs=tinysrgb&w=600',
  liveUrl: null,
  githubUrl: 'https://github.com/PresleyKoyaweda/Market-Basket-Analysis',
  features: [
    "Utilisation de Spark SQL + RDD pour la structuration des transactions",
    "Extraction des règles d’association avec filtrage sur support et confiance",
    "Déploiement d’un cluster GCP (Dataproc) optimisé pour le calcul distribué",
    "Sélection aléatoire d’un symptôme et génération de règles associées",
    "Journalisation des temps d’exécution pour chaque étape critique"
  ],
  notice: "Projet non déployé. Il a été exécuté via notebooks et cluster GCP uniquement."
},
 {
  id: 7,
  title: 'TP1 NLP: Recherche de documents par similarité',
  description: "Évaluation sémantique d'affirmations dans un corpus scientifique",
  longDescription: `Ce projet vise à retrouver les documents scientifiques pertinents à partir d’une affirmation textuelle. À l’aide de représentations vectorielles et de métriques de similarité (TF-IDF, BM25, SBERT), le système identifie les passages qui confirment ou contredisent l’affirmation initiale. Le pipeline complet couvre le chargement des données, le prétraitement, l’indexation, l’inférence et l’évaluation.`,
  stack: ['Python', 'Pandas', 'scikit-learn', 'Numpy', 'SBERT', 'BM25', 'JSONL'],
  category: 'nlp',
  icon: <Search className="text-violet-600" size={32} />,
  color: 'violet',
  image: 'https://ai2-s2-public.s3.amazonaws.com/figures/2017-08-08/61229738b0fd2abd8ca994c4445e49b36e4f3e60/5-Figure1-1.png', // image à ajouter ou proposer
  liveUrl: null, // projet non en ligne
  githubUrl: null, // repo privé ou non disponible
  features: [
    "Matching sémantique entre affirmation et corpus scientifique",
    "Utilisation de TF-IDF, BM25 et SBERT pour la représentation des textes",
    "Recherche d’information dans un corpus JSONL",
    "Évaluation avec précision, rappel et MRR",
    "Pipeline modulaire pour comparer les méthodes"
  ],
  notice: "⚠️ Ce projet académique n'est pas actuellement en ligne pour éviter les coûts d'hébergement. Contactez-moi pour une démonstration."
},
    {
  id: 8,
  title: 'TP2 NLP: Plongements lexicaux synonymes/antonymes',
  description: 'Entraînement de plongements de mots qui intègrent la notion de synonymie et d’antonymie',
  longDescription: `Ce projet vise à entraîner un modèle de plongement lexical capable de distinguer les synonymes des antonymes. Contrairement aux modèles classiques comme Word2Vec ou GloVe qui positionnent parfois les antonymes proches dans l’espace vectoriel, ici l’objectif est d’éloigner les antonymes tout en rapprochant les synonymes. Le pipeline comprend le prétraitement, le chargement de paires synonymes/antonymes, l’utilisation de GloVe pré-entraîné comme baseline, puis l’entraînement d’un modèle neuronal à partir de zéro.`,
  stack: ['Python', 'PyTorch', 'Numpy', 'Pandas', 'GloVe'],
  category: 'nlp',
  icon: <Search className="text-orange-600" size={32} />,
  color: 'orange',
  image: 'https://tse3.mm.bing.net/th/id/OIP.YyRKql6G_Ldecect_gfPlgHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', // à remplacer ou créer
  liveUrl: null, // projet non en ligne
  githubUrl: null, // repo non disponible
  features: [
    "Chargement et exploration du modèle GloVe pré-entraîné",
    "Évaluation de GloVe sur le dataset SimLex-999",
    "Traitement de paires synonymes et antonymes à grande échelle (~640k/12k)",
    "Entraînement d’un réseau de neurones pour intégrer les relations sémantiques",
    "Comparaison entre GloVe et le modèle entraîné from scratch"
  ],
  notice: "⚠️ Ce projet académique n'est pas actuellement en ligne pour éviter les coûts d'hébergement. Contactez-moi pour une démonstration."
},
    {
  id: 9,
  title: 'TP3 NLP: Alignement entre affirmations et résumés scientifiques',
  description: 'Détection des affirmations présentes dans les résumés de documents scientifiques',
  longDescription: `Ce projet a pour but de déterminer si des affirmations spécifiques sont exprimées dans les résumés (abstracts) d'articles scientifiques. En combinant des représentations vectorielles (SBERT), des mesures de similarité (cosine) et des stratégies d’alignement, le système identifie pour chaque affirmation si elle est formulée ou non dans le résumé associé. Le pipeline couvre la vectorisation, la recherche du passage le plus proche, et l’évaluation des performances par similarité.`,
  stack: ['Python', 'SBERT', 'Pandas', 'Numpy', 'JSON', 'scikit-learn'],
  category: 'nlp',
  icon: <TextSearch className="text-teal-600" size={32} />,
  color: 'teal',
  image: 'https://penseepositive.net/wp-content/uploads/2023/04/bienfaits-scientifiques-affirmations-positives.png', // à créer ou proposer
  liveUrl: null,
  githubUrl: null,
  features: [
    "Vectorisation des affirmations et segments de résumés avec SBERT",
    "Recherche du segment le plus proche par similarité cosinus",
    "Méthode d’alignement binaire (présence ou non d’une affirmation)",
    "Évaluation des performances sur un corpus aligné",
    "Exploration d'erreurs et ajustement de seuils de similarité"
  ],
  notice: "⚠️ Ce projet académique n'est pas actuellement en ligne pour éviter les coûts d'hébergement. Contactez-moi pour une démonstration."
},
   {
  id: 10,
  title: 'TP4 NLP: RAG pour Questions-Réponses avec LLM',
  description: 'Implémentation d’un système RAG basé sur Phi-3 et FAISS pour la génération de réponses conditionnées.',
  longDescription: `Ce projet vise à développer un système de génération augmentée par récupération (RAG) dans un contexte de questions-réponses. Le système combine la recherche de passages pertinents dans un corpus scientifique avec la génération de réponses via le modèle LLM Phi-3 Mini. Plusieurs versions sont comparées : prompting seul, RAG figé avec FAISS + Phi-3, et RAG amélioré avec choix dynamique des passages. L’évaluation est effectuée sur la base du BLEU score et des métriques de pertinence.`,
  stack: ['Python', 'Transformers', 'FAISS', 'Phi-3', 'Pandas', 'BLEU', 'Hugging Face'],
  category: 'nlp',
  icon: <TextSearch className="text-violet-600" size={32} />,
  color: 'violet',
  image: 'https://safjan.com/images/retrieval_augmented_generation/RAG.png', // image à ajouter
  liveUrl: null, // projet non en ligne
  githubUrl: null, // repo privé ou indisponible
  features: [
    "Génération conditionnée par les passages les plus pertinents",
    "Recherche vectorielle via FAISS avec plongements BGE",
    "Utilisation du modèle Phi-3 pour la réponse",
    "Comparaison entre prompting, RAG simple et RAG optimisé",
    "Évaluation via BLEU et compétition Kaggle"
  ],
  notice: "⚠️ Ce projet académique n'est pas actuellement en ligne pour éviter les coûts d'hébergement. Contactez-moi pour une démonstration."
}
, 
{
  id: 11,
  title: 'TP1 Advanced Concepts of Cloud (AWS): Infrastructure as Code & Load Balancer personnalisé',
  description: 'Déploiement d’un cluster EC2 sur AWS avec un load balancer personnalisé et benchmarking automatisé.',
  longDescription: `Ce projet a consisté à créer une infrastructure infonuagique complète sur AWS incluant deux clusters d’instances EC2 (t2.micro et t2.large), un load balancer personnalisé avec FastAPI, et un script de benchmarking pour comparer les performances. L’infrastructure a été automatisée de bout en bout via des scripts utilisant l’AWS SDK, intégrant également le monitoring CloudWatch. Un tableau de bord de performance et un rapport technique ont été produits.`,
  stack: ['AWS EC2', 'FastAPI', 'Python', 'Uvicorn', 'CloudWatch', 'Bash'],
  category: 'data',
  icon: <ServerCog className="text-orange-500" size={32} />,
  color: 'orange',
  image: 'https://k21academy.com/wp-content/uploads/2021/03/GCloudLoadBalancer_Diagram-03.png', // tu peux modifier si tu préfères une autre image
  liveUrl: null, // projet non déployé
  githubUrl: 'https://github.com/PresleyKoyaweda/LOG8415-Advanced-Concepts-of-Cloud-Computing-LAB', // lien vers repo si disponible
  features: [
    'Déploiement de 10 instances EC2 en cluster (5 t2.micro, 5 t2.large)',
    'Développement d’un load balancer réseau en Python',
    'Application FastAPI déployée sur chaque instance',
    'Benchmark de 1000 requêtes via asyncio et aiohttp',
    'Infrastructure automatisée avec scripts Bash et SDK AWS',
    'Surveillance via Amazon CloudWatch'
  ],
  notice: "⚠️ Ce projet académique n’est pas en ligne pour éviter les coûts d’hébergement. Contactez-moi pour une démonstration."
}
,
{
  id: 12,
  title: 'TP2 Advanced Concepts of Cloud (AWS): MapReduce et recommandation sociale sur AWS',
  description: 'Expérimentation Hadoop/Spark et recommandation d’amis via MapReduce sur Amazon EMR.',
  longDescription: `Ce TP met en œuvre des traitements Big Data dans un environnement distribué. Il comporte deux volets : 
(1) l’exécution et la comparaison de performances de la tâche WordCount avec Hadoop, Spark et Bash, sur plusieurs jeux de données hébergés sur S3 ; 
(2) l’implémentation d’un algorithme de recommandation sociale ("People You Might Know") en MapReduce. 
L’environnement est automatisé avec des scripts Bash et utilise EMR, EC2 et le SDK AWS pour le provisionnement.`,
  stack: ['Hadoop', 'Spark', 'Amazon EMR', 'AWS EC2', 'Bash', 'Python', 'MapReduce'],
  category: 'data',
  icon: <CloudLightning className="text-orange-500" size={32} />,
  color: 'orange',
  image: 'https://docs.aws.amazon.com/fr_fr/prescriptive-guidance/latest/patterns/images/pattern-img/42eb193b-2347-408a-8b25-46beeb3b29ca/images/786dbd56-7d7f-41bb-90f6-d4485d73fe15.png',
  liveUrl: null,
  githubUrl: null,
  features: [
    "Comparaison des performances de WordCount sous Hadoop, Spark et Bash",
    "Utilisation de jeux de données volumineux hébergés sur S3",
    "Déploiement d’un cluster Big Data sur Amazon EMR",
    "Recommandation d’amis via MapReduce (People You Might Know)",
    "Infrastructure as Code pour automatiser toutes les étapes"
  ],
  notice: "⚠️ Ce projet académique n'est pas actuellement en ligne pour éviter les coûts d'hébergement. Contactez-moi pour une démonstration ou le code source."
}
,
 {
  id: 13,
  title: 'TP3 Advanced Concepts of Cloud (AWS): Déploiement de conteneurs sur AWS',
  description: "Déploiement d'une application Flask conteneurisée sur des instances EC2 orchestrées",
  longDescription: `Ce projet met en œuvre le déploiement de conteneurs Docker sur AWS pour exécuter une application Flask effectuant des inférences avec un modèle ML. Un orchestrateur gère dynamiquement les requêtes envoyées à plusieurs conteneurs répartis sur différentes instances EC2. Le pipeline comprend le déploiement de l'orchestrateur, des workers, la gestion d’une file d’attente, et l'automatisation complète via des scripts.`,
  stack: ['AWS', 'Docker', 'EC2', 'Python', 'Flask', 'HuggingFace', 'Bash'],
  category: 'data',
  icon: <Server className="text-orange-600" size={32} />,
  color: 'orange',
  image: 'https://miro.medium.com/v2/resize:fit:783/1*4PtT10nghLEOAz3xyztwMA.png',
  liveUrl: null, // Projet non déployé en ligne
  githubUrl: null, // Code privé ou disponible sur demande
  features: [
    "Déploiement d'une application Flask dans des conteneurs Docker",
    "Orchestration des requêtes via une instance orchestratrice",
    "Distribution dynamique des requêtes sur 4 workers",
    "Inférence avec un modèle préentraîné DistilBERT",
    "Infrastructure as Code avec automatisation par scripts Bash"
  ],
  notice: "⚠️ Ce projet académique n'est pas actuellement en ligne pour éviter les coûts liés à AWS. Contactez-moi pour une démonstration."
}
  ,{
  id: 14,
  title: 'TP4 Advanced Concepts of Cloud (AWS): Cloud Design Patterns – Cluster MySQL',
  description: 'Implémentation des patterns Proxy, Trust-Host et Gatekeeper pour un cluster (1 manager, 4 workers) MySQL sur AWS',
  longDescription: `Dans le cadre du cours sur les concepts avancés de l’infonuagique, ce projet visait à concevoir une architecture distribuée de base de données MySQL sur Amazon EC2 en appliquant deux patterns : Proxy et Gatekeeper. L’objectif était de séparer les opérations de lecture/écriture, renforcer la sécurité avec des rôles distincts, automatiser le déploiement via scripts Bash et mesurer les performances à l’aide de benchmarks (Sysbench). Trois variantes du proxy ont été développées : redirection directe, aléatoire, et basée sur la latence.`,
  stack: ['AWS EC2', 'MySQL', 'Docker', 'Shell Script', 'Sysbench', 'Proxy Pattern', 'Gatekeeper Pattern'],
  category: 'data',
  icon: <ServerCog className="text-yellow-500" size={32} />,
  color: 'yellow',
  image: 'https://1.bp.blogspot.com/-iI9XhkA91wc/VzST5ti1kgI/AAAAAAAAEe8/kVCVxklTutQNraW4S1jJOWrZeN6WmEKpwCLcB/s1600/MySQL-Cluster.png', // à ajouter ou personnaliser
  liveUrl: null, // projet non hébergé
  githubUrl: 'https://github.com/PresleyKoyaweda/Finala_Project_of_Advanced_concepts_of_cloud', // code potentiellement privé ou local
  features: [
    "Déploiement d’un cluster MySQL avec réplication maître/esclave sur Amazon EC2",
    "Implémentation du pattern Proxy avec 3 stratégies de routage (directe, aléatoire, latence)",
    "Application du pattern Gatekeeper pour séparer les rôles front-end et traitement sécurisé",
    "Automatisation complète du déploiement via bash script",
    "Benchmarking des performances via Sysbench (1000 lectures et écritures par stratégie)"
  ],
  notice: "⚠️ Ce projet académique n'est pas actuellement en ligne pour éviter les coûts d'infrastructure. Contactez-moi pour une démonstration."
}
 ,
    {
  id: 15,
  title: 'Dev1 Méthodes Statistique d\'Apprentissage: Régression linéaire simple et optimisation du RSS',
  description: 'Visualisation et validation des estimateurs optimaux pour une régression linéaire simple à partir de données simulées.',
  longDescription: `Ce devoir visait à estimer les paramètres d’un modèle de régression linéaire simple (Beta0, Beta1) à l’aide de méthodes analytiques et numériques. En utilisant Python, l’étudiant a exploré les courbes de résidus (RSS, RSS1, RSS2), réalisé des visualisations 2D et 3D des fonctions de coût, et comparé les valeurs estimées analytiquement avec celles obtenues via optimisation. Les résultats montrent un très bon accord entre les approches, confirmant la précision des estimations.`,
  stack: ['R'],
  category: 'ml',
  icon: <BarChart3 className="text-orange-500" size={32} />,
  color: 'orange',
  image: 'https://tse4.mm.bing.net/th/id/OIP.Xu3wc_tzhMmvU5ANcTcYCwHaFo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', // à insérer ou à proposer
  liveUrl: null, // projet académique non déployé
  githubUrl: null, // projet non en ligne
  features: [
    'Estimation des paramètres Beta0 et Beta1 d’une régression linéaire simple',
    'Visualisation du RSS et des contours de la fonction de coût',
    'Comparaison des solutions analytiques et numériques',
    'Utilisation de méthodes de descente de gradient et visualisation 3D',
    'Interprétation des résultats et validation de l’optimum global'
  ],
  notice: "⚠️ Ce projet académique n'est pas en ligne. Il est disponible sur demande pour consultation ou démonstration."
}
,
    {
  id: 16,
  title: 'Dev2 Méthodes Statistique d\'Apprentissage: Régression linéaire et classification supervisée',
  description: "Analyse prédictive sur les données Boston Housing et Default à l’aide de modèles statistiques.",
  longDescription: `Ce projet académique explore deux volets majeurs de l’apprentissage supervisé : la régression linéaire multiple appliquée aux données Boston Housing, et la classification avec KNN, régression logistique et linéaire sur les données de défaut de paiement. Le pipeline comprend l’évaluation des hypothèses (normalité, linéarité, hétéroscédasticité), la sélection de variables pertinentes, ainsi que l’interprétation des métriques de performance et des graphes diagnostics.`,
  stack: ['R',  'ggplot2'],
  category: 'ml',
  icon: <TrendingUp className="text-amber-600" size={32} />,
  color: 'amber',
  image: 'https://images.pexels.com/photos/6801643/pexels-photo-6801643.jpeg?auto=compress&cs=tinysrgb&w=600',
  liveUrl: null, // non en ligne
  githubUrl: null, // privé ou non disponible
  features: [
    "Régression linéaire simple, multiple et avec interaction",
    "Diagnostics de résidus et identification des points influents",
    "Classification binaire avec KNN et régression logistique",
    "Comparaison des performances avec matrice de confusion et taux d’erreur",
    "Application aux datasets Boston et Default (ISLR2)"
  ],
  notice: "⚠️ Ce projet académique n'est pas actuellement en ligne pour éviter les coûts d'hébergement. Contactez-moi pour une démonstration ou un accès aux fichiers."
}
,
    {
  id: 17,
  title: 'Dev3 Méthodes Statistique d\'Apprentissage: Sélection de modèles et évaluation statistique',
  description: "Comparaison de modèles supervisés et sélection de variables via validation croisée, bootstrap, LASSO et critères d'information",
  longDescription: `Ce devoir explore en profondeur l’évaluation de modèles statistiques supervisés à l’aide de KNN, régression logistique, LDA et QDA. Il inclut également des techniques avancées comme la validation croisée (LOOCV, K-Fold), l’estimation par bootstrap, la sélection de variables (regsubsets, LASSO, stepwise) et l’analyse de performance via précision, sensibilité, spécificité et critères Cp, BIC, R² ajusté. Le devoir met en évidence l’importance de la simplicité du modèle face à sa performance, et propose une sélection optimale de prédicteurs à l’aide de LASSO et sélection exhaustive.`,
  stack: ['R', 'RStudio', 'Caret', 'Boot', 'ISLR', 'glmnet'],
  category: 'ml',
  icon: <BarChart3 className="text-pink-600" size={32} />,
  color: 'pink',
  image: 'https://pmarchand1.github.io/ECL7102/images/biais_variance.png', // à ajouter ou modifier
  liveUrl: null, // non déployé
  githubUrl: null, // pas en ligne
  features: [
    "Évaluation de KNN, régression logistique, LDA et QDA via LOOCV et 5-Fold CV",
    "Estimation d'un paramètre par bootstrap avec intervalle de confiance",
    "Comparaison de modèles avec Cp, BIC, R² ajusté",
    "Sélection de variables via regsubsets, stepwise et LASSO",
    "Visualisation des frontières de décision et matrices de confusion"
  ],
  notice: "⚠️ Projet académique non déployé. Contactez-moi pour une démonstration complète ou le rapport détaillé."
}
,
    {
  id: 18,
  title: 'Dev4 Méthodes Statistique d\'Apprentissage: Comparaison de modèles de régression',
  description: "Analyse comparative de cinq méthodes d'apprentissage pour la prédiction de ventes",
  longDescription: `Ce devoir applique différentes méthodes d’apprentissage statistique sur la base de données Carseats, dans le but de prédire les ventes (Sales). Cinq approches sont comparées : meilleurs sous-ensembles, Ridge, Lasso, régression sur composantes principales (PCR) et moindres carrés partiels (PLS). Chaque méthode est évaluée via validation croisée (5-fold CV) pour sélectionner le modèle optimal. Une analyse comparative conclut sur le meilleur modèle à privilégier.`,
  stack: ['R', 'ISLR2', 'glmnet', 'leaps', 'pls'],
  category: 'ml',
  icon: <BarChart3 className="text-orange-600" size={32} />,
  color: 'orange',
  image: 'https://bookdown.org/teodor_tiplica/book_linearrrgression/03-Transformation_files/figure-html/ex1Solution-1.png', // à créer ou illustrer
  liveUrl: null, // projet non hébergé
  githubUrl: null, // pas de repo précisé
  features: [
    "Validation croisée 5-fold pour toutes les approches",
    "Approche par meilleurs sous-ensembles via regsubset()",
    "Régressions Ridge et Lasso avec sélection de lambda optimal via glmnet()",
    "Régressions PCR et PLS via pcr() et plsr()",
    "Comparaison des erreurs de test pour choisir le modèle final"
  ],
  notice: "⚠️ Ce projet est issu d’un devoir académique évalué. Le code n'est pas accessible en ligne. Une démonstration est disponible sur demande."
}
,
{
  id: 19,
  title: "Dev5 Méthodes Statistique d\'Apprentissage: Apprentissage supervisé : validation croisée et complexité",
  description: "Implémentation de la validation croisée et étude du compromis biais-variance",
  longDescription: `Dans ce TP, nous étudions les performances de différents modèles supervisés (régression polynomiale, arbres de décision) à l’aide de la validation croisée. L’objectif est d’évaluer la capacité de généralisation selon les degrés de complexité du modèle et de visualiser le compromis biais-variance. La partie finale illustre l'effet du sur-apprentissage.`,
  stack: ['R'],
  category: 'ml',
  icon: <ActivitySquare className="text-orange-600" size={32} />,
  color: 'orange',
  image: 'https://markovate.com/wp-content/uploads/2023/05/Unsupervised-Machine-Learning-for-Problem-Solving-800x368.webp',
  liveUrl: null, // projet non en ligne
  githubUrl: null, // projet non publié
  features: [
    "Implémentation de la validation croisée k-fold",
    "Estimation des erreurs de biais et variance",
    "Régression polynomiale avec visualisation des erreurs",
    "Comparaison des performances selon la complexité du modèle",
    "Illustration du sur-apprentissage via des courbes de validation"
  ],
  notice: "⚠️ Ce projet académique n'est pas actuellement en ligne pour éviter les coûts d'hébergement. Contactez-moi pour une démonstration."
}

    ,
  {
  id: 20,
  title: 'TP1 IA (Techniques Probabiliste et Apprentissage): Détection d’objets et réseaux de neurones convolutifs',
  description: "Exploration complète des étapes d’un pipeline de vision par ordinateur, allant du traitement des images à l'entraînement de CNN pour la détection d’objets.",
  longDescription: `Ce projet académique se compose de trois parties :
  
  - Partie 1 : Application de techniques classiques de détection (histogramme de gradients orientés, seuillage adaptatif, etc.) pour repérer les chiffres dans des images complexes.
  
  - Partie 2 : Conception et entraînement d’un réseau convolutif (CNN) avec TensorFlow/Keras pour classifier des chiffres extraits des images.
  
  - Partie 3 : Détection d'objets sur de nouvelles images en combinant le modèle entraîné avec une stratégie de balayage (sliding window), suivi d’un post-traitement par suppression non maximale (NMS).`,
  
  stack: ['Python', 'OpenCV', 'NumPy', 'Matplotlib', 'TensorFlow', 'Keras'],
  category: 'nlp',
  icon: <Camera className="text-orange-500" size={32} />,
  color: 'orange',
  image: 'https://tse1.mm.bing.net/th/id/OIP.5wSRYr5Q0Jh5q02sfkhpEgHaCt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  liveUrl: null,
  githubUrl: null,
  features: [
    "Détection de chiffres dans des images à l’aide de HOG, seuillage, ouverture/fermeture morphologique",
    "Entraînement d’un CNN sur des chiffres extraits manuellement",
    "Utilisation de fenêtres glissantes pour la détection dans des images complètes",
    "Évaluation avec confusion matrix, précision, rappel, et IoU",
    "Implémentation d’une stratégie de suppression non maximale (NMS)"
  ],
  notice: "⚠️ Ce projet est réalisé dans le cadre d’un TP universitaire, non disponible en ligne. Contactez-moi pour une démonstration."
}
,
   {
  id: 21,
  title: 'TP1 IA (Techniques Probabiliste et Apprentissage): Traduction automatique multilingue',
  description: "Implémentation et comparaison de modèles séquentiels pour la traduction anglais-français",
  longDescription: `Ce projet vise à construire un système de traduction automatique à partir de données bilingues anglais-français. Trois architectures sont étudiées : un RNN de base (fourni), un GRU-RNN implémenté manuellement, et un Transformer Encoder-Decoder conçu de zéro (sans utiliser nn.Transformer). L’ensemble du pipeline comprend le prétraitement linguistique, la création de vocabulaires, la vectorisation des séquences, l’entraînement, l’évaluation BLEU ainsi que la visualisation de l’attention.`,
  stack: ['Python', 'PyTorch', 'Spacy', 'WandB', 'BLEU Score'],
  category: 'nlp',
  icon: <Languages className="text-orange-600" size={32} />,
  color: 'orange',
  image: 'https://www.altosor-communication.com/wp-content/uploads/2023/09/wpml-wordpress-traduction-1.jpg', // à adapter si nécessaire
  liveUrl: null, // projet non en ligne
  githubUrl: null, // repo non disponible
  features: [
    "Chargement et nettoyage d’un corpus bilingue anglais-français",
    "Vectorisation et encodage de séquences (vocabulaire, tokens, PAD)",
    "Implémentation manuelle d’un GRU-RNN bidirectionnel",
    "Construction d’un modèle Transformer complet sans bibliothèques préfaites",
    "Évaluation BLEU et visualisation des poids d’attention"
  ],
  notice: "⚠️ Ce projet académique n'est pas actuellement en ligne pour éviter les coûts d'hébergement. Contactez-moi pour une démonstration ou pour voir le code."
}

    ,
    {
  id: 22,
  title: 'Projet Final IA (Techniques Probabiliste et Apprentissage): Modèles de Diffusion – DDPM sur MNIST et CIFAR-10',
  description: 'Implémentation complète d’un modèle de diffusion probabiliste pour la génération d’images réalistes.',
  longDescription: `Ce projet final du cours "IA : Techniques Probabilistes et Apprentissage" visait à implémenter un modèle de diffusion débruitant (DDPM) à partir de zéro, en suivant l'article fondateur de Jonathan Ho et al. (2020). L’approche a été appliquée à deux jeux de données classiques : MNIST (images 28x28 en niveaux de gris) et CIFAR-10 (images couleur 32x32, 10 classes). L’entraînement a été réalisé avec PyTorch, en optimisant la prédiction du bruit à chaque étape temporelle du processus de débruitage.`,
  stack: ['Python', 'PyTorch', 'MNIST', 'CIFAR-10', 'DDPM', 'UNet'],
  category: 'ml',
  icon: <Zap className="text-rose-600" size={32} />,
  color: 'rose',
  image: 'https://datasets.activeloop.ai/wp-content/uploads/2022/09/CIFAR-10-dataset-Activeloop-Platform-visualization-image-1.webp', // image à ajouter ou modifier
  liveUrl: null, // pas de démo en ligne
  githubUrl: null, // pas de repo public
  features: [
    "Implémentation complète d’un DDPM depuis l’article original",
    "Application à MNIST et CIFAR-10 pour la génération d’images",
    "Utilisation du modèle UNet pour la prédiction du bruit",
    "Visualisation de la génération progressive depuis du bruit",
    "Suivi de l’entraînement avec wandb et Matplotlib"
  ],
  notice: "⚠️ Ce projet académique n'est pas actuellement en ligne pour éviter les coûts d'hébergement. Contactez-moi pour une démonstration ou le code complet."
}
    ,
  {
  id: 23,
  title: 'TP1 Systèmes de recommandation: Systèmes de recommandation collaboratifs',
  description: "Évaluation de méthodes collaboratives pour la prédiction de notes utilisateurs",
  longDescription: `Ce projet explore trois approches de filtrage collaboratif pour les systèmes de recommandation : la moyenne globale, l'approche utilisateur-utilisateur, et l'approche item-item. Les performances des prédictions sont évaluées à l’aide d’une validation croisée 5 replis, en comparant les métriques RMSE et MAE sur des matrices utilisateurs-items issues de jeux de données réels.`,
  stack: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Scikit-learn'],
  category: 'ml',
  icon: <Users className="text-pink-500" size={32} />,
  color: 'pink',
  image: 'https://www.smalsresearch.be/wp-content/uploads/2022/06/recsys6-2.png',
  liveUrl: null,
  githubUrl: null,
  features: [
    "Création de la matrice utilisateur-item à partir de données brutes",
    "Mise en œuvre de la validation croisée à 5 replis",
    "Prédiction via moyenne globale, user-based et item-based",
    "Évaluation des performances avec RMSE et MAE",
    "Visualisation et analyse comparative des approches"
  ],
  notice: "⚠️ Ce projet académique n'est pas en ligne pour des raisons de confidentialité. Contactez-moi pour en discuter."
}
,
 {
  id: 24,
  title: 'TP2 Systèmes de recommandation: Filtrage collaboratif et SVD',
  description: "Évaluation d’un système de recommandation basé sur la décomposition en valeurs singulières (SVD).",
  longDescription: `Ce projet explore différentes méthodes de recommandation, notamment le filtrage collaboratif basé sur la moyenne, la factorisation matricielle (SVD), ainsi que les distances de similarité (Pearson, Euclidienne). Le pipeline inclut le nettoyage et la transformation des données, la construction des matrices utilisateur-item, la factorisation, l’évaluation de la performance (RMSE) selon plusieurs valeurs de k, et l’analyse de similarité entre utilisateurs.`,
  stack: ['Python', 'Numpy', 'Pandas', 'SVD', 'Matplotlib'],
  category: 'ml',
  icon: <BarChart3 className="text-orange-500" size={32} />,
  color: 'orange',
  image: 'https://laviedesidees.fr/IMG/jpg/types-of-recommendation-systems.jpg',
  liveUrl: null,
  githubUrl: null,
  features: [
    "Recommandation par moyenne utilisateur/item",
    "Factorisation matricielle avec SVD",
    "Comparaison des performances via RMSE",
    "Analyse de la similarité entre utilisateurs",
    "Visualisation des résultats et sélection du meilleur k"
  ],
  notice: "⚠️ Ce projet académique n'est pas en ligne. Contactez-moi pour une démonstration ou accès aux résultats."
}
,
 {
  id: 25,
  title: 'TP3 Systèmes de recommandation: Systèmes de recommandation avec Deep Learning',
  description: 'Recommandation de films basée sur les plongements utilisateur-film via un modèle Two-Tower.',
  longDescription: `Ce projet vise à implémenter un système de recommandation utilisant des réseaux de neurones avec la librairie PyTorch. En s'appuyant sur la base MovieLens 100k, un modèle Two-Tower a été développé pour produire des plongements (embeddings) utilisateurs et films. La prédiction est obtenue via le produit scalaire des embeddings. Le pipeline inclut l'entraînement, l'évaluation avec RMSE/MAE, et le suivi de l'apprentissage (early-stopping, visualisation des courbes).`,
  stack: ['Python', 'PyTorch', 'Pandas', 'scikit-learn', 'MovieLens 100k'],
  category: 'ml',
  icon: <Film className="text-orange-600" size={32} />,
  color: 'orange',
  image: 'https://arxiv.org/html/2406.01539v1/x1.png',
  liveUrl: null,
  githubUrl: null,
  features: [
    'Implémentation d’un modèle Two-Tower pour la recommandation',
    'Plongements utilisateur-film avec PyTorch',
    'Évaluation par RMSE et MAE',
    'Early-stopping pour sélection du nombre optimal d’epochs',
    'Visualisation des performances en apprentissage'
  ],
  notice: "⚠️ Ce projet académique n'est pas actuellement en ligne pour éviter les coûts d'hébergement. Contactez-moi pour une démonstration."
}
,
 {
  id: 26,
  title: "TP3 Systèmes de recommandation: Apprentissage supervisé sur données réseau",
  description: "Prédiction d'attributs de nœuds dans un graphe en exploitant des similarités structurelles",
  longDescription: `Ce projet se concentre sur la prédiction d'informations manquantes dans des graphes réels. En utilisant une approche d'apprentissage supervisé, les caractéristiques des nœuds sont extraites à partir de leur structure de voisinage. Différentes stratégies de représentation (matrices d'adjacence, mesures de centralité, similarité cosinus, etc.) sont évaluées pour entraîner un modèle de prédiction robuste.`,
  stack: ['Python', 'NetworkX', 'NumPy', 'Pandas', 'scikit-learn', 'Matplotlib', 'Seaborn'],
  category: 'ml',
  icon: <BookOpen className="text-yellow-600" size={32} />,
  color: 'yellow',
  image: 'https://i.ibb.co/z4crQ9V/1-Iz7b-CLr-PTImn-BDOOEy-E3-LA.png', // à générer ou fournir
  liveUrl: null,
  githubUrl: null,
  features: [
    "Utilisation de graphes réels (réseaux sociaux ou citation)",
    "Extraction de features à partir des relations entre nœuds",
    "Utilisation de la similarité cosinus pour la classification",
    "Évaluation par précision et MRR (Mean Reciprocal Rank)",
    "Exploration des performances avec différentes tailles de voisinage"
  ],
  notice: "⚠️ Ce projet est académique et non déployé en ligne. Une démo locale est possible sur demande."
},

{
  id: 27,
  title: 'TP1 Système Repartis et Infonuagique: Docker & Réseautique',
  description: 'Serveur web Apache dans un container Docker sous Debian, avec configuration réseau manuelle.',
  longDescription: `Projet réalisé dans le cadre du cours Systèmes répartis et Infonuagique. L’objectif était de créer un container Docker sous Debian 11 avec installation d’un serveur Apache. Le tout a été configuré manuellement avec gestion des ports, copie de pages HTML personnalisées, et validation via navigateur Web.`,
  stack: ['Docker', 'Linux (Debian)', 'Apache2', 'VirtualBox'],
  category: 'data',
  icon: <Server className="text-gray-500" size={32} />, // Assure-toi d'importer `Server` depuis lucide-react
  color: 'gray',
  image: 'https://tse1.mm.bing.net/th/id/OIP.wq7sntpo3o-E6xahaXU25wAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  liveUrl: null,
  githubUrl: null,
  features: [
    'Création d’un container Docker avec image Debian',
    'Installation et configuration d’un serveur Apache2',
    'Personnalisation du contenu de /var/www/html',
    'Redirection de ports et accès via navigateur',
    'Utilisation de VirtualBox et de commandes réseau'
  ],
  notice: "Ce projet a été réalisé localement pour un travail pratique de cours. Il n’est pas hébergé en ligne ni sur GitHub, mais peut être présenté sur demande."
},

{
  id: 28,
  title: 'TP2 Système Repartis et Infonuagique: – Appels de méthodes à distance',
  description: 'Architecture distribuée avec gRPC, Protobuf et instrumentation LTTng.',
  longDescription: 'Ce projet académique vise à implémenter un système distribué de soumission de tâches via appels gRPC, et à analyser les performances à l’aide de LTTng et Trace Compass. Il comprend la création d’un gestionnaire FIFO de tâches, la compilation dans Docker, ainsi qu’une seconde partie d’analyse d’un système RH client-serveur via traces système. Projet non déployé pour des raisons de coût cloud.',
  stack: ['gRPC', 'Protobuf', 'Docker', 'C++', 'LTTng', 'Trace Compass'],
  category: 'data',
  icon: <ServerCrash className="text-orange-600" size={32} />,
  color: 'orange',
  image: 'https://www.innovaphone.com/content/images/Solutions_innovaphone_centres_d-appels_fr.jpg',
  liveUrl: null, // important : laisser vide
  githubUrl: null, // idem
  features: [
    'Appels de méthodes à distance avec gRPC',
    'Gestionnaire FIFO de soumission de tâches',
    'Compilation et exécution dans Docker',
    'Instrumentation système avec LTTng',
    'Analyse de performance avec Trace Compass',
    'Projet non déployé pour des raisons de coût cloud'
  ]
},
{
  id: 29,
  title: 'TP3 Système Repartis et Infonuagique: Système de fichiers distribué avec GlusterFS',
  description: 'TP académique sur le déploiement de GlusterFS via Docker pour un volume distribué et répliqué.',
  longDescription:
    'Projet réalisé dans le cadre du cours INF8480 – Systèmes répartis et infonuagique. Il vise à déployer un système de fichiers distribué haute disponibilité avec GlusterFS, simulé via des conteneurs Docker. Il inclut la mise en place de volumes répliqués et distribués, un Dockerfile personnalisé, et des tests de performances sur des machines virtuelles.',
  stack: ['Docker', 'GlusterFS', 'Linux', 'VirtualBox', 'Shell'],
  category: 'data',
  icon: <HardDrive className="text-gray-700" size={32} />,
  color: 'gray',
  image: 'https://iboysoft.com/images/en-wiki/distributed-file-system/summary-distributed-file-system.png',
  liveUrl: null, // Non accessible en ligne
  githubUrl: null, // Non publié
  features: [
    'Volume GlusterFS répliqué et distribué',
    'Orchestration avec Docker',
    'Tests de performance lecture/écriture',
    'Automatisation via Dockerfile personnalisé',
    'Extension dynamique du cluster (add-brick)',
    'Projet académique non déployé en ligne'
  ]
},
{
  id: 30,
  title: 'TP4 Système Repartis et Infonuagique: Synchronisation entre processus distribués',
  description: 'Développement d’un système de synchronisation entre processus avec Socket, mutex et sémaphores.',
  longDescription:
    'Ce projet a pour objectif de développer une application client-serveur distribuée, dans laquelle plusieurs clients communiquent avec un serveur centralisé via sockets TCP/IP. Les clients exécutent des tâches synchronisées selon des règles strictes à l’aide de mécanismes de synchronisation : mutex, sémaphores, threads POSIX et signaux Unix. L’environnement de test est basé sur des conteneurs Docker simulan des processus sur différents nœuds du réseau.',
  stack: ['C', 'Sockets TCP/IP', 'Threads POSIX', 'Mutex', 'Sémaphores', 'Docker'],
  category: 'data',
  icon: <Zap className="text-yellow-600" size={32} />,
  color: 'yellow',
  image: 'https://hypertecsp.com/wp-content/uploads/Cloud-inforgraphic.png',
  liveUrl: '', // Non déployé
  githubUrl: '', // Non publié
  features: [
    'Architecture client-serveur avec Sockets TCP/IP',
    'Implémentation de threads POSIX côté serveur',
    'Synchronisation via mutex et sémaphores',
    'Utilisation de signaux pour contrôle des processus',
    'Tests de cohérence via conteneurs Docker',
    'Projet académique non déployé en ligne'
  ],
  notice: "Ce projet a été réalisé dans un cadre académique pour valider la compréhension de la synchronisation distribuée. Il n’est pas en ligne mais peut être présenté sur demande."
},
{
  id: 31,
  title: 'TP5 Système Réparti et Infonuagique: Transactions bancaire et concurrence',
  description: 'Expérimentations sur les transactions concurrentes dans PostgreSQL.',
  longDescription: `Projet réalisé dans le cadre du cours INF8480 – Systèmes répartis et infonuagique. L’objectif est de comprendre les enjeux de cohérence et de sérialisation dans les bases de données réparties. Après l’installation de PostgreSQL sur une VM locale, des cas de transactions concurrentes sont analysés, notamment à travers les verrous, l’ordonnancement, et la réplication. Le TP met l’accent sur l’observation des effets de lectures/écritures simultanées dans un environnement transactionnel.`,
  stack: ['PostgreSQL', 'Linux (Debian)', 'VirtualBox', 'Transactions SQL'],
  category: 'data',
  icon: <Database className="text-purple-600" size={32} />,
  color: 'purple',
  image: 'https://tse3.mm.bing.net/th/id/OIP.-t5B4na8_RrjYxLy039WUQHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  liveUrl: null,
  githubUrl: null,
  features: [
    'Installation de PostgreSQL sur machine virtuelle Debian',
    'Expérimentation de transactions concurrentes',
    'Analyse de conflits d’accès (verrouillage, isolation)',
    'Utilisation de la documentation officielle PostgreSQL 12',
    'Observation des effets de lectures/écritures simultanées',
    'Projet académique non déployé en ligne'
  ],
  notice: "Ce projet a été réalisé localement dans le cadre d’un travail pratique universitaire. Il n’est pas en ligne ni sur GitHub, mais reste disponible sur demande."
},
{
  id: 32,
  title: 'TP6 Système Réparti et Infonuagique: Service infonuagique tolérant aux pannes',
  description: 'Déploiement d’un service web résilient avec Kubernetes et microk8s',
  longDescription: `Projet académique avancé réalisé dans le cadre du cours INF8480 – Systèmes répartis et infonuagique.
Mise en place complète d’un cluster Kubernetes local avec microk8s, déploiement de services web redondants via des pods multiples, équilibrage de charge avec Ingress, et configuration d’un dashboard de monitoring.
Une attention particulière a été portée à la tolérance aux pannes à travers la réplication des services.`,
  stack: ['Kubernetes', 'microk8s', 'VMWare', 'Ingress', 'Load Balancer'],
  category: 'data',
  icon: <Server className="text-orange-500" size={32} />,
  color: 'orange',
  image: 'https://loussi.ca/wp-content/uploads/2023/10/service01-img-big.png',
  liveUrl: null, // Application non en ligne
  githubUrl: null, // Non disponible publiquement
  features: [
    'Installation d’un cluster Kubernetes local',
    'Déploiement multi-pods et services résilients',
    'Configuration du tableau de bord Kubernetes',
    'Service Ingress avec équilibrage de charge',
    'Routage HTTP vers plusieurs versions d’applications'
  ],
  notice: '⚠️ Ce projet académique n’est plus en ligne pour des raisons de coût cloud. Disponible sur demande.'
}










  ];

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'nlp', label: 'NLP & IA' },
    { id: 'data', label: 'Data Engineering' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projets Réalisés</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes réalisations en science des données et intelligence artificielle
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                filter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
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
                    <div className={`bg-white p-2 rounded-full shadow-lg`}>
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
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm font-medium rounded-full bg-${project.color}-100 text-${project.color}-700`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700">
                        +{project.stack.length - 3}
                      </span>
                    )}
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
          </AnimatePresence>
        </motion.div>

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
                className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    {selectedProject.icon}
                    <h3 className="text-3xl font-bold text-gray-900 ml-3">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Fonctionnalités principales</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 rounded-full bg-${selectedProject.color}-500 mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech: string) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 text-sm font-medium rounded-full bg-${selectedProject.color}-100 text-${selectedProject.color}-700`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;