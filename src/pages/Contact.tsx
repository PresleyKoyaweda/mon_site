import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, Linkedin, Github, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://formspree.io/f/manjzddo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Réinitialiser l'état après quelques secondes
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      alert("Une erreur s'est produite. Veuillez réessayer.");
    }
  } catch (error) {
    alert("Erreur lors de l'envoi : " + error);
  } finally {
    setIsSubmitting(false);
  }
};
;

  const contactInfo = [
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: 'Téléphone',
      value: 'Contactez-moi via LinkedIn ou formulaire',
      href: '#', //tel:+14388750712
      color: 'green'
    },
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: 'Email',
      value: 'gpresleyk@gmail.com',
      href: 'mailto:gpresleyk@gmail.com',
      color: 'blue'
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      title: 'Localisation',
      value: 'Brossard, QC, Canada',
      href: '#',
      color: 'purple'
    }
  ];

  const socialLinks = [
    { 
      icon: <Globe size={24} />, 
      url: 'https://site-web-kgp.netlify.app', 
      label: 'Site Web', 
      color: 'indigo' 
    },
    { 
      icon: <Linkedin size={24} />, 
      url: 'https://www.linkedin.com/in/presley-koyaweda', 
      label: 'LinkedIn', 
      color: 'blue' 
    },
    { 
      icon: <Github size={24} />, 
      url: 'https://github.com/PresleyKoyaweda', 
      label: 'GitHub', 
      color: 'gray' 
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-moi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discutons de vos projets en science des données et intelligence artificielle
          </p>
        </motion.div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-12 text-white"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                {contact.href !== '#' ? (
                  <motion.a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <span className="text-white">{contact.icon}</span>
                    <span className="font-medium">{contact.value}</span>
                  </motion.a>
                ) : (
                  <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full">
                    <span className="text-white">{contact.icon}</span>
                    <span className="font-medium">{contact.value}</span>
                  </div>
                )}
              </motion.div>
            ))}
            
            {/* Website Link */}
            <motion.a
              href="https://site-web-kgp.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <Globe className="text-white" size={24} />
              <span className="font-medium">www.gervais-presley-koyaweda.com</span>
            </motion.a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Restons en contact</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Je suis toujours ouvert aux nouvelles opportunités et collaborations 
                dans le domaine de la science des données et de l'intelligence artificielle. 
                N'hésitez pas à me contacter pour discuter de vos projets.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center p-6 bg-${info.color}-50 rounded-xl shadow-lg`}
                >
                  {info.icon}
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900 text-lg">{info.title}</div>
                    {info.href !== '#' ? (
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className={`text-${info.color}-600 font-medium hover:text-${info.color}-800 transition-colors`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className={`text-${info.color}-600 font-medium`}>{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Suivez-moi</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : '_self'}
                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-moi un message</h3>
            
            <form
            action="https://formspree.io/f/manjzddo"
            method="POST"
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Sujet *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder="Décrivez votre projet ou votre demande..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-lg"
            >
              <Send size={20} />
              Envoyer le message
            </button>
          </form>

          </motion.div>
        </div>

        {/* Additional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Prêt à démarrer votre projet ?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Que ce soit pour une consultation, un projet de développement ou une collaboration, 
            je suis là pour vous accompagner dans vos défis data science et IA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full">Consultation gratuite</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Réponse sous 24h</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Devis personnalisé</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;