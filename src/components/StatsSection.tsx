import { Globe } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    { val: '24M+', label: 'Entregas procesadas/año' },
    { val: '99.9%', label: 'Uptime de la plataforma' },
    { val: '< 2seg', label: 'Latencia de tracking' }
  ];

  return (
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
             {stats.map((stat, i) => (
               <div key={i} className="bg-white/50 backdrop-blur-sm p-8 rounded-[32px] shadow-lg border border-white/20">
                  <p className="text-5xl font-display font-bold mb-2 text-emerald-900">{stat.val}</p>
                  <p className="text-sm font-black uppercase tracking-widest opacity-80">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
