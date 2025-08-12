import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:dudupiazza16@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: 'envelope',
      title: 'Email',
      value: 'dudupiazza16@gmail.com',
      link: 'mailto:dudupiazza16@gmail.com'
    },
    {
      icon: 'phone',
      title: 'Telefone',
      value: '(51) 99369-3721',
      link: 'tel:5551993693721'
    },
    {
      icon: 'map-marker-alt',
      title: 'Localização',
      value: 'Porto Alegre - Cristal, RS',
      link: 'https://maps.google.com/?q=Porto+Alegre+Cristal+RS'
    },
    {
      icon: ['fab', 'whatsapp'],
      title: 'WhatsApp',
      value: '(51) 99369-3721',
      link: 'https://wa.me/5551993693721'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00FF7F] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF6B35] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#00FF7F] to-[#FF6B35] bg-clip-text text-transparent">
            <FontAwesomeIcon icon="comments" className="mr-4" />
            CONTATO
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Entre em contato conosco! Estamos aqui para ajudar com qualquer dúvida sobre nossos produtos ou serviços.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FontAwesomeIcon icon="paper-plane" className="mr-3 text-[#00FF7F]" />
              Envie uma Mensagem
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    <FontAwesomeIcon icon="user" className="mr-2" />
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF7F] focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    <FontAwesomeIcon icon="envelope" className="mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF7F] focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  <FontAwesomeIcon icon="tag" className="mr-2" />
                  Assunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF7F] focus:border-transparent transition-all"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  <FontAwesomeIcon icon="comment" className="mr-2" />
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF7F] focus:border-transparent transition-all resize-none"
                  placeholder="Digite sua mensagem aqui..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] text-black font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-[#00FF7F]/25 transition-all flex items-center justify-center"
              >
                <FontAwesomeIcon icon="paper-plane" className="mr-2" />
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FontAwesomeIcon icon="info-circle" className="mr-3 text-[#00FF7F]" />
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#00FF7F]/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00FF7F] to-[#00E5FF] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={info.icon as any} className="text-black text-lg" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{info.title}</h3>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FontAwesomeIcon icon="clock" className="mr-3 text-[#00FF7F]" />
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span className="text-[#00FF7F]">9h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-[#00FF7F]">9h às 14h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-gray-500">Fechado</span>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FontAwesomeIcon icon="share-alt" className="mr-3 text-[#00FF7F]" />
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: ['fab', 'instagram'], color: 'from-pink-500 to-purple-500', link: '#' },
                  { icon: ['fab', 'facebook'], color: 'from-blue-600 to-blue-700', link: '#' },
                  { icon: ['fab', 'twitter'], color: 'from-blue-400 to-blue-500', link: '#' },
                  { icon: ['fab', 'tiktok'], color: 'from-black to-gray-800', link: '#' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all`}
                  >
                    <FontAwesomeIcon icon={social.icon as any} className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;