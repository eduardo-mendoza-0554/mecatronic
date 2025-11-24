// AboutAndLocation.js
import { BUSINESS_INFO } from './constants.js';

export const renderAboutAndLocation = () => {
    return `
    <section id="nosotros" class="py-0 scroll-mt-24">
      <div class="bg-white py-20">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row gap-12 items-start mb-16">
                <div class="md:w-1/2 sticky top-24">
                    <div class="relative group">
                        <img 
                            src="https://picsum.photos/id/111/800/600" 
                            alt="Demetrio Machaca - Técnico Mecánico" 
                            class="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.01]"
                        />
                    </div>
                </div>
                
                <div class="md:w-1/2">
                    <p class="text-sm font-bold uppercase text-brazil-green mb-2 tracking-widest">
                        Nuestra Historia
                    </p>
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Taller Demotronic: <span class="text-vw-blue">Técnica y Honestidad</span> desde ${BUSINESS_INFO.foundedYear}
                    </h2>
                    <p class="text-lg text-slate-600 mb-6">
                        Fundado por ${BUSINESS_INFO.owner}, Demotronic nació de la pasión por la ingeniería alemana de Volkswagen. Aplicamos el rigor y la metodología aprendida en Brasil, un referente técnico para la marca.
                    </p>
                    
                    <div class="grid grid-cols-2 gap-6 text-slate-700">
                        <div>
                            <span class="text-brazil-yellow font-extrabold text-4xl block mb-1">15+</span>
                            <p class="text-sm font-semibold">Años de Experiencia</p>
                        </div>
                        <div>
                            <span class="text-brazil-green font-extrabold text-4xl block mb-1">100%</span>
                            <p class="text-sm font-semibold">Enfoque en VW</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <div id="ubicacion" class="bg-gray-900 py-20 scroll-mt-24">
        <div class="container mx-auto px-4">
            <div class="flex flex-col-reverse lg:flex-row gap-10 items-stretch">
                <div class="lg:w-2/3 h-80 lg:h-auto min-h-[300px] bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 relative group">
                    <img 
                        src="https://picsum.photos/id/1031/1200/600" 
                        alt="Mapa de ubicación"
                        class="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
                    />
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div class="bg-brazil-green/90 p-4 rounded-xl backdrop-blur shadow-xl text-center">
                            <p class="font-bold text-white text-lg">Zona Cotahuma</p>
                            <p class="text-white/80 text-sm">La Paz, Bolivia</p>
                        </div>
                    </div>
                </div>
                
                <div class="lg:w-1/3 p-8 bg-white rounded-xl shadow-2xl flex flex-col justify-center">
                    <p class="text-sm font-bold uppercase text-vw-blue mb-2 tracking-widest">
                        ¿Dónde estamos?
                    </p>
                    <h3 class="text-3xl font-bold text-slate-900 mb-6">
                        Visítenos en La Paz
                    </h3>
                    <p class="text-slate-600 mb-6">
                        Estamos convenientemente ubicados para atender a toda la clientela de La Paz y El Alto, con acceso fácil y seguro.
                    </p>
                    
                    <div class="mb-8">
                        <p class="font-bold text-slate-800 flex items-center gap-3 mb-2">
                            <span>Ubicación:</span>
                        </p>
                        <p class="text-slate-600 ml-6">${BUSINESS_INFO.location}</p>
                    </div>

                    <div class="flex flex-col gap-3">
                        <a 
                            href="${BUSINESS_INFO.mapLink}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-center bg-brazil-yellow text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                        >
                            Abrir en Google Maps
                        </a>
                        <a 
                            href="tel:+${BUSINESS_INFO.phone}"
                            class="text-center border-2 border-vw-blue text-vw-blue py-3 rounded-lg font-bold hover:bg-vw-blue hover:text-white transition-colors"
                        >
                            Llamar Ahora: ${BUSINESS_INFO.displayPhone}
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    `;
};