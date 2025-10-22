import React from 'react';
import Header from '../components/auxilio/Header';
import TrustBelt from '../components/auxilio/TrustBelt';
import WhatIsIt from '../components/auxilio/WhatIsIt';
import WhoQualifies from '../components/auxilio/WhoQualifies';
import HowItWorks from '../components/auxilio/HowItWorks';
import ContactForm from '../components/auxilio/ContactForm';
import FAQ from '../components/auxilio/FAQ';
import About from '../components/auxilio/About';
import PageFooter from '../components/auxilio/PageFooter';
import FloatingWhatsAppButton from '../components/auxilio/FloatingWhatsAppButton';

const AuxilioAcidente = () => (
  <>
    <Header />
    <main>
      <TrustBelt />
      <WhatIsIt />
      <WhoQualifies />
      <HowItWorks />
      <ContactForm />
      <FAQ />
      <About />
    </main>
    <PageFooter />
    <FloatingWhatsAppButton />
  </>
);

export default AuxilioAcidente;
