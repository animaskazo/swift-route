export const IndustrySolutions = () => {
  const industries = [
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
  ];

  return (
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
           {industries.map((industry, i) => (
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
  );
};
