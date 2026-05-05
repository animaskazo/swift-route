import { useState, type FormEvent } from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div>
              <h2 className="text-sm font-extrabold text-emerald-900 mb-6 uppercase tracking-[0.2em]">TRANSFORMACIÓN DIGITAL</h2>
              <p className="text-4xl lg:text-7xl font-display font-bold text-brevo-dark leading-[1.1] mb-8 tracking-tighter">
                  Lleva tu logística al siguiente nivel
              </p>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                  Nuestro equipo te ayudará a implementar SwiftRoute en tiempo récord para que empieces a facturar más y gastar menos.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                  <div>
                      <p className="text-4xl font-display font-bold text-emerald-900 mb-2">98%</p>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tasa de éxito</p>
                  </div>
                  <div>
                      <p className="text-4xl font-display font-bold text-emerald-900 mb-2">-40%</p>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Carga de Soporte</p>
                  </div>
              </div>
          </div>

          <div className="bg-gray-50 rounded-[48px] p-10 lg:p-16 shadow-2xl border border-gray-100 overflow-hidden relative">
              <AnimatePresence mode="wait">
                  {formSubmitted ? (
                      <motion.div 
                          key="success"
                          initial={{ opacity: 0, scale: 0.9 }} 
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-center py-12"
                      >
                          <div className="w-24 h-24 bg-brevo-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-brevo-primary/20">
                              <Send className="w-12 h-12 text-white" />
                          </div>
                          <h3 className="text-3xl font-display font-bold mb-4 text-brevo-dark tracking-tight">¡Mensaje enviado!</h3>
                          <p className="text-gray-500 text-lg font-medium">Nos pondremos en contacto contigo en menos de 24 horas.</p>
                      </motion.div>
                  ) : (
                      <motion.form 
                          key="form"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit} 
                          className="space-y-6"
                      >
                          <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Nombre</label>
                              <input required type="text" placeholder="Tu nombre" className="w-full px-6 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-brevo-primary/20 focus:border-brevo-primary bg-white transition-all font-medium" />
                          </div>
                          <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Empresa</label>
                              <input required type="text" placeholder="Nombre de tu empresa" className="w-full px-6 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-brevo-primary/20 focus:border-brevo-primary bg-white transition-all font-medium" />
                          </div>
                          <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email</label>
                              <input required type="email" placeholder="email@empresa.com" className="w-full px-6 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-brevo-primary/20 focus:border-brevo-primary bg-white transition-all font-medium" />
                          </div>
                          <button type="submit" className="w-full bg-brevo-dark text-white py-6 rounded-2xl font-bold text-xl hover:bg-black transition-all flex items-center justify-center gap-3 shadow-lg">
                              Contactar a ventas <ArrowRight className="w-5 h-5" />
                          </button>
                      </motion.form>
                  )}
              </AnimatePresence>
          </div>
      </div>
    </section>
  );
};
