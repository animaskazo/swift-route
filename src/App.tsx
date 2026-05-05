/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type FormEvent } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Globe, 
  Star,
  Package,
  Truck,
  Map,
  BarChart3,
  Zap,
  Smartphone,
  MessageCircle,
  ArrowRight,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pricingPlans = [
    {
      name: 'Startup',
      price: '49',
      drivers: 'Hasta 5 conductores',
      features: ['Dashboard de gestión', 'App para conductores', 'Protocolos de incidencia', 'Soporte vía email'],
      highlight: false
    },
    {
      name: 'Business',
      price: '149',
      drivers: 'Hasta 20 conductores',
      features: ['Todo en Startup', 'Optimizador de rutas (AI)', 'Marca Blanca parcial', 'Notificaciones SMS/WhatsApp', 'Soporte prioritario'],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      drivers: 'Conductores ilimitados',
      features: ['Todo en Business', 'Marca Blanca total', 'API Dedicada', 'Gestor de cuenta', 'SLA Garantizado'],
      highlight: false
    }
  ];

  const logos = [
    { name: 'Volkswagen', logo: 'VW' },
    { name: 'Nestlé', logo: 'Nestlé' },
    { name: 'eBay', logo: 'ebay' },
    { name: 'Louis Vuitton', logo: 'LV' },
    { name: 'L\'Occitane', logo: 'L\'OCCITANE' },
    { name: 'GlobalStar', logo: 'G*' }
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-brevo-text overflow-x-hidden">
      {/* Header Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-medium ${
          isScrolled ? 'bg-white shadow-sm py-4' : 'bg-brevo-bg-light py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-1">
              <span className="text-[28px] font-display font-bold tracking-tight text-brevo-text">SwiftRoute</span>
            </a>
            
            <div className="hidden lg:flex items-center gap-8 text-[15px]">
              <a href="#funciones" className="hover:opacity-70 transition-opacity">Plataforma</a>
              <a href="#precios" className="hover:opacity-70 transition-opacity">Precios</a>
              <a href="#contacto" className="hover:opacity-70 transition-opacity">Contacto</a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-[15px]">
            <a href="#" className="font-bold hover:opacity-70 cursor-pointer">Iniciar sesión</a>
            <a href="#contacto" className="bg-brevo-dark text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all">
              Hablar con ventas
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-display font-bold">SwiftRoute</span>
              <button onClick={() => setMobileMenuOpen(false)}><X /></button>
            </div>
            <div className="flex flex-col gap-8 text-xl font-bold">
              <a href="#funciones" onClick={() => setMobileMenuOpen(false)}>Plataforma</a>
              <a href="#precios" onClick={() => setMobileMenuOpen(false)}>Precios</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
              <div className="h-px bg-gray-100 my-2"></div>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Iniciar sesión</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="w-full bg-brevo-dark text-white py-4 rounded-xl text-center">Hablar con ventas</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="bg-brevo-bg-light pt-36 pb-20 lg:pt-48 lg:pb-32 min-h-[85vh] flex items-center">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-[72px] font-display font-bold leading-[1.05] tracking-tight mb-8 text-brevo-dark">
              Convierte cada entrega en un cliente de por vida
            </h1>
            <p className="text-xl text-brevo-dark/70 mb-10 max-w-xl leading-relaxed font-medium">
              Potencia tu operación logística con tecnología de última milla. 
              La plataforma White-Label para escalar entregas Same Day con control total.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href="#contacto" className="bg-brevo-dark text-lg text-white px-8 py-5 rounded-xl font-bold hover:opacity-90 transition-all">
              Hablar con ventas
            </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <p className="text-sm font-bold text-brevo-dark/50">Amado por empresas de todo el mundo</p>
              <div className="flex items-center gap-1 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                <span className="text-sm font-bold">4.9</span>
                <div className="flex text-yellow-500">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex relative h-[600px] items-center justify-center overflow-hidden"
          >
            {/* Minimalist Radar Pulses */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: [0.8, 2.5], 
                    opacity: [0.5, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 1.3,
                    ease: "easeOut"
                  }}
                  className="absolute w-64 h-64 border border-emerald-500/30 rounded-full"
                />
              ))}
            </div>

            {/* Central Hub */}
            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Main Device Visual */}
                <div className="w-56 h-56 bg-white rounded-[48px] shadow-2xl border border-gray-100 flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-50"></div>
                   <Truck className="w-20 h-20 text-emerald-600 relative z-10" />
                   
                   {/* Mini "Live" indicator */}
                   <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-black text-emerald-700 uppercase tracking-tighter">Live</span>
                   </div>
                </div>

                {/* Satellite Nodes */}
                {[
                  { top: '-20px', left: '-20px', icon: <Zap className="w-4 h-4" />, color: 'bg-emerald-500', delay: 0 },
                  { bottom: '-10px', right: '-30px', icon: <Globe className="w-4 h-4" />, color: 'bg-blue-500', delay: 0.5 },
                  { top: '40%', right: '-50px', icon: <Package className="w-4 h-4" />, color: 'bg-emerald-400', delay: 0.8 },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: node.delay }}
                    style={{ top: node.top, left: node.left, bottom: node.bottom, right: node.right }}
                    className={`absolute w-12 h-12 ${node.color} text-white rounded-2xl shadow-xl flex items-center justify-center z-20`}
                  >
                    {node.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Floating Info Cards */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-20 right-0 lg:right-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white max-w-[180px] hidden sm:block"
            >
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Entregas Hoy</p>
               <div className="flex items-end gap-2">
                  <p className="text-2xl font-bold text-brevo-dark">1,284</p>
                  <span className="text-emerald-500 text-xs font-bold mb-1">+12%</span>
               </div>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-20 left-0 lg:left-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white max-w-[180px] hidden sm:block"
            >
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Optimización</p>
               <p className="text-2xl font-bold text-brevo-dark">98.2%</p>
               <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '98.2%' }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-emerald-500"
                  />
               </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Trust Section - Enhanced with marquee feel and better styling */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:max-w-[280px] text-center lg:text-left">
              <p className="text-[15px] font-bold text-brevo-dark leading-tight">
                Más de <span className="text-emerald-800">600.000 clientes</span> en todo el mundo ya confían en SwiftRoute para su logística
              </p>
            </div>
            
            <div className="flex-1 w-full overflow-hidden relative">
              {/* Logo container with a subtle horizontal scroll/fade feel */}
              <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 lg:justify-end">
                {logos.map((logo) => (
                  <motion.div 
                    key={logo.name} 
                    whileHover={{ scale: 1.05, filter: 'grayscale(0%)', opacity: 1 }}
                    className="flex flex-col items-center opacity-30 grayscale transition-all cursor-default group"
                  >
                    <span className="text-2xl lg:text-3xl font-black tracking-tighter text-brevo-dark group-hover:text-emerald-800 transition-colors">
                      {logo.logo}
                    </span>
                    <span className="text-[9px] font-black mt-1 uppercase tracking-[0.2em] leading-none text-gray-500">
                      {logo.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section 1 */}
      <section className="w-full h-[500px] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
          alt="Logistics center" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brevo-dark/30 backdrop-blur-[2px] flex items-center justify-center">
            <div className="max-w-4xl px-6 text-center">
                <h2 className="text-4xl lg:text-6xl font-display font-bold text-white tracking-tighter mb-6">Eficiencia sin fronteras</h2>
                <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto">Nuestra red global permite que tu negocio llegue a cualquier rincón del planeta con la misma precisión que una entrega local.</p>
            </div>
        </div>
      </section>


      {/* Features Overview */}
      <section id="funciones" className="py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-sm font-extrabold text-emerald-900 mb-6 uppercase tracking-[0.2em]">UN ECOSISTEMA DISEÑADO PARA LA VELOCIDAD</h2>
            <p className="text-4xl lg:text-6xl font-display font-bold text-brevo-dark mb-6 tracking-tighter">Optimiza cada etapa de tu logística</p>
            <p className="text-xl text-gray-500 font-medium">Automatiza la gestión de conductores y deleita a tus clientes con información en tiempo real.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BarChart3 />, title: 'Dashboard Central', desc: 'Gestiona asignaciones, monitorea en mapa y analiza KPI de rendimiento de flota en vivo.' },
              { icon: <Smartphone />, title: 'App para Conductores', desc: 'Hojas de ruta inteligentes, escaneo de paquetes, navegación GPS y recolección de firmas.' },
              { icon: <Zap />, title: 'Optimizador de rutas', desc: 'Reduce gastos de combustible y tiempo de entrega hasta un 30% con Inteligencia Artificial.' },
              { icon: <MessageCircle />, title: 'Marca Blanca', desc: 'Personaliza el link de seguimiento y notificaciones con el logo y colores de tu propia empresa.' }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[32px] border border-gray-100 hover:bg-brevo-bg-light/20 transition-all group">
                <div className="w-14 h-14 bg-white shadow-xl text-emerald-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Primary Green Block - Statistics/Social Proof */}
      <section className="bg-brevo-primary py-24 text-brevo-dark overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
           <Globe className="w-96 h-96 -mr-20 -mt-10" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-12 text-center lg:text-left items-center">
            <div className="lg:col-span-1 border-white/20">
               <h3 className="text-3xl font-display font-bold leading-tight tracking-tight">Rendimiento garantizado a escala global</h3>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
               {[
                 { val: '24M+', label: 'Entregas procesadas/año' },
                 { val: '99.9%', label: 'Uptime de la plataforma' },
                 { val: '< 2seg', label: 'Latencia de tracking' }
               ].map((stat, i) => (
                 <div key={i} className="bg-white/50 backdrop-blur-sm p-8 rounded-[32px] shadow-lg border border-white/20">
                    <p className="text-5xl font-display font-bold mb-2 text-emerald-900">{stat.val}</p>
                    <p className="text-sm font-black uppercase tracking-widest opacity-80">{stat.label}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section id="soluciones" className="py-32 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
             <div>
                <h2 className="text-sm font-extrabold text-emerald-900 mb-6 uppercase tracking-[0.2em]">TRANSFORMACIÓN POR SECTOR</h2>
                <p className="text-4xl lg:text-6xl font-display font-bold text-brevo-dark leading-tight tracking-tighter">Una plataforma para cada vertical de negocio</p>
             </div>
             <p className="text-xl text-gray-500 font-medium leading-relaxed">
                SwiftRoute se adapta a las necesidades específicas de tu industria, permitiendo que tu operación sea escalable desde el primer envío.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
             {[
               { 
                 title: 'E-commerce & Retail', 
                 desc: 'Cumple con la promesa de entrega Same-Day. Sincroniza tus tiendas online y mantén a tus clientes informados en cada paso.',
                 tags: ['Integración API', 'Tracking Pro', 'Firma Digital']
               },
               { 
                 title: 'Mensajería y Courier', 
                 desc: 'Optimiza la última milla de tu empresa de logística. Gestiona grandes volúmenes de paquetes con control total de cada chófer.',
                 tags: ['Escaneo Masivo', 'Control de Flota', 'Despacho AM/PM']
               },
               { 
                 title: 'Alimentos y Bebidas', 
                 desc: 'Gestión de entregas ultra-rápidas. Asegura la frescura de tus productos con rutas cortas y visibilidad instantánea.',
                 tags: ['Rutas Dinámicas', 'Prueba de Entrega', 'Alertas de Tiempo']
               }
             ].map((industry, i) => (
               <div key={i} className="bg-white p-12 rounded-[48px] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold mb-6 text-brevo-dark tracking-tight">{industry.title}</h3>
                  <p className="text-gray-500 font-medium mb-8 leading-relaxed italic">"{industry.desc}"</p>
                  <div className="flex flex-wrap gap-2">
                     {industry.tags.map(tag => (
                       <span key={tag} className="px-3 py-1 bg-brevo-bg-light text-emerald-800 text-[10px] font-black rounded-full uppercase tracking-widest">{tag}</span>
                     ))}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Section 2 */}
      <section className="w-full h-[900px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1543499459-d1460946bdc6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Delivery driver" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </section>

      {/* Pricing Section - Per Driver */}
      <section id="precios" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 text-brevo-dark">
            <h2 className="text-sm font-extrabold text-emerald-900 mb-6 uppercase tracking-[0.2em]">PLANES POR CONDUCTOR</h2>
            <p className="text-4xl lg:text-5xl font-display font-bold">Paga solo por lo que necesitas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`p-12 rounded-[40px] shadow-xl relative bg-white transition-all hover:translate-y-[-10px] flex flex-col h-full ${plan.highlight ? 'ring-4 ring-brevo-primary/20 shadow-brevo-primary/10' : 'border border-gray-100'}`}>
                {plan.highlight && (
                  <div className="absolute top-8 right-8 bg-brevo-primary text-white text-[10px] font-black py-1 px-4 rounded-full tracking-widest uppercase">RECOMENDADO</div>
                )}
                <h3 className="text-xl font-bold mb-6 tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-display font-bold">{plan.price === 'Custom' ? '' : '$'}{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="opacity-60 text-lg font-medium">/mes</span>}
                </div>
                <p className="font-bold text-emerald-800 mb-10 tracking-tight">{plan.drivers}</p>
                
                <ul className="space-y-4 mb-12 flex-grow">
                   {plan.features.map(f => (
                     <li key={f} className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                        <div className="w-5 h-5 bg-brevo-bg-light text-emerald-800 rounded-full flex items-center justify-center">
                            <ArrowRight className="w-3 h-3" />
                        </div>
                        {f}
                     </li>
                   ))}
                </ul>

                <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all ${plan.highlight ? 'bg-brevo-dark text-white hover:bg-black' : 'bg-gray-100 text-brevo-dark hover:bg-gray-200'}`}>
                  Contactar a ventas
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
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

      {/* FINAL GREEN BLOCK - CTA */}
      <section className="bg-brevo-primary py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center text-brevo-dark">
           <h2 className="text-4xl lg:text-7xl font-display font-bold mb-10 tracking-tighter">¿Estás listo para dominar la última milla?</h2>
           <p className="text-xl lg:text-2xl font-medium opacity-90 mb-12 max-w-2xl mx-auto">Únete a cientos de empresas que ya han escalado su logística con SwiftRoute.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-brevo-dark text-white px-12 py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all shadow-xl">
                 Contactar a ventas
              </button>
              <button className="bg-white text-brevo-dark px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
                 Solicitar consultoría <ArrowRight className="w-5 h-5" />
              </button>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-12 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20 text-[15px]">
          <div className="col-span-2 lg:col-span-1">
             <span className="text-2xl font-display font-bold text-brevo-dark mb-8 block tracking-tighter">SwiftRoute</span>
             <div className="flex gap-4">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-brevo-primary cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-brevo-primary cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-brevo-primary cursor-pointer transition-colors" />
             </div>
          </div>
          
          {[
            { title: 'Plataforma', links: ['Dashboard', 'Driver App', 'AI Optimizer', 'Marca Blanca'] },
            { title: 'Soluciones', links: ['Same Day', 'Mensajería Local', 'Logística Express'] },
            { title: 'Recursos', links: ['Blog', 'Soporte Técnica', 'Documentación'] },
            { title: 'Compañía', links: ['Nosotros', 'Contacto', 'Prensa'] }
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-brevo-dark mb-6 tracking-tight">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link}><a href="#" className="text-gray-500 hover:text-brevo-primary transition-colors font-medium">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[13px] text-gray-400 font-medium">
           <p>© 2024 SwiftRoute by Super Digital Solutions. Todos los derechos reservados.</p>
           <div className="flex items-center gap-2 cursor-pointer hover:text-brevo-dark transition-colors">
              <Globe className="w-4 h-4" />
              <span>Español</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
