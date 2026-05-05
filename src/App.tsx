/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ImageSection } from './components/ImageSection';
import { Features } from './components/Features';
import { StatsSection } from './components/StatsSection';
import { IndustrySolutions } from './components/IndustrySolutions';
import { Pricing } from './components/Pricing';
import { ContactForm } from './components/ContactForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brevo-text overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <TrustSection />
        
        <ImageSection 
          image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Logistics center"
          title="Eficiencia sin fronteras"
          description="Nuestra red global permite que tu negocio llegue a cualquier rincón del planeta con la misma precisión que una entrega local."
        />

        <Features />
        <StatsSection />
        <IndustrySolutions />

        <ImageSection 
          image="https://images.unsplash.com/photo-1543499459-d1460946bdc6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Delivery driver"
          height="h-[900px]"
        />

        <Pricing />
        <ContactForm />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
