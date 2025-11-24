// WhyChooseUs.js

// IMPORTACIÓN CORREGIDA: Usar WHY_CHOOSE_US_BENEFITS en lugar de BENEFITS
import { WHY_CHOOSE_US_BENEFITS } from './constants.js';

// Función para mapear los nombres de los iconos a SVG (como se hizo en Header.js)
const getIconSvg = (iconName) => {
    switch(iconName) {
        case 'BadgeCheck': return '<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.27a2 2 0 00-2.257-.936l-13 3c-1.026.24-1.298 1.584-.52 2.37L10 18l5.549-5.549c.787-.787.514-2.131-.52-2.37l-3-13z"></path></svg>';
        case 'GraduationCap': return '<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zM3 11v6m6-6v6m6-6v6m6-6v6"></path></svg>';
        case 'Laptop': return '<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20h9a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v14a1 1 0 001 1h9zM2 15h20"></path></svg>';
        case 'HeartHandshake': return '<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364l-1.061 1.061M12 20.364l-7.682-7.682a4.5 4.5 0 01-1.318-3.182V7a4.5 4.5 0 019-2M12 20.364l7.682-7.682a4.5 4.5 0 011.318-3.182V7a4.5 4.5 0 00-9-2zM12 11.5l1.5-1.5M12 11.5l-1.5-1.5M12 11.5L9 8.5M15 8.5L12 11.5"></path></svg>';
        default: return '';
    }
};

export const renderWhyChooseUs = () => {
    // Usar la constante corregida
    const benefitsHTML = WHY_CHOOSE_US_BENEFITS.map(benefit => `
        <div key="${benefit.id}" class="flex flex-col items-center text-center group cursor-default">
            <div class="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center ${benefit.color} mb-6 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
                <div class="transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    ${getIconSvg(benefit.icon)}
                </div>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-brazil-blue transition-colors">
                ${benefit.title}
            </h3>
            <p class="text-slate-600 px-4 text-sm md:text-base">
                ${benefit.description}
            </p>
        </div>
    `).join('');

    return `
        <section id="porque-elegirnos" class="py-24 bg-white scroll-mt-24">
            <div class="container mx-auto px-4">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        ¿Por qué elegir <span class="text-brazil-blue">Demotronic</span>?
                    </h2>
                    <p class="text-slate-600 text-lg">
                        La diferencia está en el detalle. Combinamos pasión por la mecánica con el rigor técnico que tu Volkswagen exige.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    ${benefitsHTML}
                </div>
            </div>
        </section>
    `;
};