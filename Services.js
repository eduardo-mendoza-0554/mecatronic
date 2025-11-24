// Services.js
import { SERVICES } from './constants.js';

export const renderServices = () => {
    // NOTA: Se usan placeholders de iconos/clases para simular los iconos de Lucide
    const renderIcon = (iconName, colorClass) => {
        // En un proyecto real, esto sería un SVG o una librería de iconos.
        // Aquí usamos una caja de color para indicar la presencia de un icono.
        return `<div class="w-10 h-10 ${colorClass} bg-opacity-10 rounded-full flex items-center justify-center text-xl font-bold border ${colorClass}">${iconName.charAt(0)}</div>`;
    };

    const serviceCards = SERVICES.map(service => `
        <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-${service.color.split('-').pop()}-500/50">
            <div class="flex items-start gap-4 mb-4">
                ${renderIcon(service.icon, service.color)}
                <h3 class="text-xl font-bold text-slate-900 leading-snug">${service.title}</h3>
            </div>
            <p class="text-slate-600 mb-6">${service.shortDescription}</p>
            <button 
                data-service-id="${service.id}"
                class="view-service-details text-brazil-green font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
                Ver Detalles </button>
        </div>
    `).join('');

    return `
    <section id="servicios" class="py-24 bg-slate-50 scroll-mt-24">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nuestros <span class="text-brazil-green">Servicios</span> Especializados
          </h2>
          <p class="text-slate-600 text-lg">
            Todo lo que tu vehículo Volkswagen necesita: desde mantenimiento preventivo hasta diagnóstico avanzado.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${serviceCards}
        </div>
      </div>
    </section>
    `;
};