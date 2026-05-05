import { Globe, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  const footerLinks = [
    { title: 'Plataforma', links: ['Dashboard', 'Driver App', 'AI Optimizer', 'Marca Blanca'] },
    { title: 'Soluciones', links: ['Same Day', 'Mensajería Local', 'Logística Express'] },
    { title: 'Recursos', links: ['Blog', 'Soporte Técnica', 'Documentación'] },
    { title: 'Compañía', links: ['Nosotros', 'Contacto', 'Prensa'] }
  ];

  return (
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
        
        {footerLinks.map((col) => (
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
  );
};
