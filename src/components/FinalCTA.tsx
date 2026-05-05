import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
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
  );
};
