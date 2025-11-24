// main.js (Asegúrate de que este archivo contenga todas estas importaciones)

import { BUSINESS_INFO, SERVICE_OPTIONS } from './constants.js';
// Importa las funciones de renderizado de cada componente
import { renderHeader } from './Header.js';
import { renderHero } from './Hero.js';         // <-- Ahora debe existir
import { renderServices } from './Services.js';   // <-- Ahora debe existir
import { renderWhyChooseUs } from './WhyChooseUs.js'; // <-- Ahora debe existir
import { renderAboutAndLocation } from './AboutAndLocation.js'; // <-- Ahora debe existir
import { renderConsultation } from './Consultation.js'; // <-- Ahora debe existir
import { renderTestimonials } from './Testimonials.js'; // <-- Ahora debe existir
import { renderBookingForm } from './BookingForm.js'; // <-- Ahora debe existir
import { renderFooter } from './Footer.js';       // <-- Ahora debe existir

// ... el resto de la lógica para inyectar y manejar eventos ...
document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app');
    if (!appContainer) return;

    // 1. INYECCIÓN DE CONTENIDO
    const sections = [
        renderHeader(),
        renderHero(),
        renderServices(),
        renderWhyChooseUs(),
        renderAboutAndLocation(),
        renderConsultation(),
        renderTestimonials(),
        renderBookingForm(),
        renderFooter()
    ].join('');

    appContainer.innerHTML = sections;
    
    // 2. LÓGICA DE INTERACCIÓN (Sustituye a los hooks de React)
    // ... (El resto del código de main.js debe ir aquí) ...
});