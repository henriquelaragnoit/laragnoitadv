import React from 'react';
import Header from '../components/trabalhista/Header';
import TrustBelt from '../components/trabalhista/TrustBelt';
import AreasDeAtuacao from '../components/trabalhista/AreasDeAtuacao';
import WhoQualifies from '../components/trabalhista/WhoQualifies';
import HowItWorks from '../components/trabalhista/HowItWorks';
import FAQ from '../components/trabalhista/FAQ';
import About from '../components/trabalhista/About';
import PageFooter from '../components/trabalhista/PageFooter';
import FloatingWhatsAppButton from '../components/trabalhista/FloatingWhatsAppButton';

const TrabalhistaReclamante = () => (
  <>
    <Header />
    <main>
      <TrustBelt />
      <AreasDeAtuacao />
      <WhoQualifies />
      <HowItWorks />
      <FAQ />
      <About />
    </main>
    <PageFooter />
    <FloatingWhatsAppButton />
  </>
);

export default TrabalhistaReclamante;
