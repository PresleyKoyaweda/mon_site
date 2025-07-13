import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart,
  Linkedin,
  Github,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Globe
} from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    { icon: <Phone size={18} />, text: 'Contactez-moi via LinkedIn ou formulaire', href: '#' },
    { icon: <Mail size={18} />, text: 'gpresleyk@gmail.com', href: 'mailto:gpresleyk@gmail.com' },
    { icon: <MapPin size={18} />, text: 'Brossard, QC, CA', href: '#' },
    { icon: <Globe size={18} />, text: 'www.gervais-presley-koyaweda.com', href: 'https://site-web-kgp.netlify.app' },
    { icon: <Linkedin size={18} />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/presley-koyaweda' },
    { icon: <Github size={18} />, text: 'GitHub', href: 'https://github.com/PresleyKoyaweda' }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/presley-koyaweda', label: 'LinkedIn' },
    { icon: <Github size={20} />, url: 'https://github.com/PresleyKoyaweda', label: 'GitHub' },
    { icon: <Twitter size={20} />, url: '#', label: 'Twitter' },
    { icon: <Mail size={20} />, url: 'mailto:gpresleyk@gmail.com', label: 'Email' }
  ];

  const navigationLinks = [
    { label: 'Accueil', to: '/' },
    { label: 'À propos', to: '/about' },
    { label: 'Compétences', to: '/skills' },
    { label: 'Projets', to: '/projects' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center gap-2"
              >
                {contact.href !== '#' ? (
                  <motion.a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="text-gray-400">{contact.icon}</span>
                    <span className="font-medium">{contact.text}</span>
                  </motion.a>
                ) : (
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-gray-400">{contact.icon}</span>
                    <span className="font-medium">{contact.text}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Presley Koyaweda</h3>
            <p className="text-gray-300 mb-4">
              Ingénieur en Science des Données et Intelligence Artificielle passionné par 
              l'innovation technologique et l'impact social.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              {navigationLinks.map((nav, index) => (
                <li key={index}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link to={nav.to} className="hover:text-blue-400 transition-colors">
                      {nav.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Direct</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:gpresleyk@gmail.com" className="hover:text-blue-400 transition-colors">
                  gpresleyk@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-green-400" />
                <span>Contactez-moi via LinkedIn ou formulaire</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-purple-400" />
                <span>Brossard, QC, Canada</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} className="text-blue-400" />
                <a
                  href="https://www.linkedin.com/in/presley-koyaweda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} className="text-gray-400" />
                <a
                  href="https://github.com/PresleyKoyaweda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Développé avec <Heart className="text-red-500" size={16} /> par Presley Koyaweda
          </p>
          <p className="text-gray-500 text-sm mt-2">© 2024 Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
