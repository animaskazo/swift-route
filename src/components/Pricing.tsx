import { ArrowRight } from 'lucide-react';

export const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '59',
      drivers: 'Hasta 4 conductores',
      features: ['Dashboard de gestión', 'App para conductores', 'Protocolos de incidencia', 'Soporte vía email'],
      highlight: false
    },
    {
      name: 'Business',
      price: '259',
      drivers: 'Hasta 20 conductores',
      features: ['Todo en Basic', 'Envios Flex', 'Optimizador de rutas (AI)', 'Marca Blanca parcial', 'Notificaciones SMS/WhatsApp', 'Soporte prioritario'],
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

  return (
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
  );
};
