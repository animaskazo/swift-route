import { motion } from 'motion/react';

export const TrustSection = () => {
  const logos = [
    { name: 'Volkswagen', logo: 'VW' },
    { name: 'Nestlé', logo: 'Nestlé' },
    { name: 'eBay', logo: 'ebay' },
    { name: 'Louis Vuitton', logo: 'LV' },
    { name: 'L\'Occitane', logo: 'L\'OCCITANE' },
    { name: 'GlobalStar', logo: 'G*' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:max-w-[280px] text-center lg:text-left">
            <p className="text-[15px] font-bold text-brevo-dark leading-tight">
              Más de <span className="text-emerald-800">600.000 clientes</span> en todo el mundo ya confían en SwiftRoute para su logística
            </p>
          </div>
          
          <div className="flex-1 w-full overflow-hidden relative">
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
  );
};
