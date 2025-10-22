import React from 'react';
import { WhatsAppIcon } from './Icons';

const WHATSAPP_LINK = "http://wa.me/5511943849988";

const About = () => (
    <section aria-labelledby="quem-somos">
        <div className="container about-section">
            <span className="tag">Quem Somos</span>
            <h2 id="quem-somos">Laragnoit Advogados</h2>
            <p>Com mais de 8 anos de atuação, o escritório LARAGNOIT Advogados se consolidou como um escritório que alia experiência, visão estratégica e atualização constante para oferecer soluções jurídicas eficazes e personalizadas.</p>
            <p>O escritório se destaca pela dedicação em compreender as necessidades de cada cliente e conduzir seus casos com excelência técnica, ética e comprometimento.</p>
            <p>Nosso propósito é construir resultados sólidos, sempre pautados na confiança, inovação e proximidade no atendimento, atuando de forma abrangente para atender demandas jurídicas em diferentes áreas do Direito.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
                <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Falar com especialista</a>
            </div>
        </div>
    </section>
);

export default About;
