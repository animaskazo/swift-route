import { Star, Truck, Zap, Globe, Package } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
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
  );
};
