// Testimonials.js
import { TESTIMONIALS } from './constants.js';

export const renderTestimonials = () => {
    // Función para renderizar estrellas
    const renderStars = (rating) => {
        let stars = '';
        for (let i = 0; i < rating; i++) {
            stars += `<span class="text-brazil-yellow fill-brazil-yellow">★</span>`;
        }
        return stars;
    };

    const testimonialCards = TESTIMONIALS.map(testimonial => `
        <div class="bg-white p-8 rounded-xl shadow-xl border border-slate-100 flex flex-col h-full group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
            
            <div class="flex gap-1 mb-4 relative z-10">
                ${renderStars(testimonial.rating)}
            </div>

            <p class="text-slate-600 italic mb-6 relative z-10 flex-grow leading-relaxed text-sm md:text-base">
                "${testimonial.content}"
            </p>

            <div class="flex items-center gap-3 mt-auto border-t border-slate-50 pt-4 relative z-10">
                <div class="w-10 h-10 rounded-full bg-slate-100 text-brazil-blue flex items-center justify-center font-bold text-lg border-2 border-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                    ${testimonial.name.charAt(0)}
                </div>
                <div>
                    <h4 class="font-bold text-slate-900 text-sm leading-tight">${testimonial.name}</h4>
                    <p class="text-xs text-brazil-green font-bold uppercase tracking-wide">${testimonial.role}</p>
                </div>
            </div>
            
            <div class="absolute top-6 right-6 text-slate-100 group-hover:text-brazil-yellow/20 transition-colors duration-300">
                <span class="text-4xl">❝</span>
            </div>
        </div>
    `).join('');

    return `
    <section id="testimonios" class="py-24 bg-slate-50 scroll-mt-24">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Lo que dicen nuestros <span class="text-brazil-yellow">Clientes VW</span>
          </h2>
          <p class="text-slate-600 text-lg">
            Nuestra mayor garantía es la satisfacción de los propietarios de Volkswagen en La Paz.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${testimonialCards}
        </div>
      </div>
    </section>
    `;
};