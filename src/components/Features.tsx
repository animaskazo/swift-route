import { BarChart3, Smartphone, Zap, MessageCircle } from 'lucide-react';

export const Features = () => {
  const features = [
    { icon: <BarChart3 />, title: 'Dashboard Central', desc: 'Gestiona asignaciones, monitorea en mapa y analiza KPI de rendimiento de flota en vivo.' },
    { icon: <Smartphone />, title: 'App para Conductores', desc: 'Hojas de ruta inteligentes, escaneo de paquetes, navegación GPS y recolección de firmas.' },
    { icon: <Zap />, title: 'Optimizador de rutas', desc: 'Reduce gastos de combustible y tiempo de entrega hasta un 30% con Inteligencia Artificial.' },
    { icon: <MessageCircle />, title: 'Marca Blanca', desc: 'Personaliza el link de seguimiento y notificaciones con el logo y colores de tu propia empresa.' }
  ];

  return (
    <section id="funciones" className="py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-extrabold text-emerald-900 mb-6 uppercase tracking-[0.2em]">UN ECOSISTEMA DISEÑADO PARA LA VELOCIDAD</h2>
          <p className="text-4xl lg:text-6xl font-display font-bold text-brevo-dark mb-6 tracking-tighter">Optimiza cada etapa de tu logística</p>
          <p className="text-xl text-gray-500 font-medium">Automatiza la gestión de conductores y deleita a tus clientes con información en tiempo real.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
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
  );
};
