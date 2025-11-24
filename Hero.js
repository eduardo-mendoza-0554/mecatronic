// Hero.js
export const renderHero = () => {
    // Usamos imágenes de placeholder o la URL que usó en Hero.tsx
    const imageUrl = "https://picsum.photos/id/1072/1920/1080"; 
    
    return `
    <section id="inicio" class="relative h-screen min-h-[600px] flex items-center scroll-mt-24 overflow-hidden group">
      
      <div class="absolute inset-0 z-0">
        <div class="w-full h-full">
          <img 
            src="${imageUrl}" 
            alt="Fondo de taller mecánico VW" 
            class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
      
      <div class="absolute inset-0 bg-black/70 z-10"></div>

      <div class="container mx-auto px-4 relative z-20 text-white text-center">
        <div class="max-w-4xl mx-auto py-20">
          <p class="text-brazil-yellow font-bold text-lg mb-3 animate-fade-in-up">
            Más de 15 años de experiencia | Técnica Brasileña
          </p>
          <h1 class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-up animation-delay-200">
            Especialistas <span class="text-brazil-green">Volkswagen</span> en La Paz
          </h1>
          <p class="text-xl md:text-2xl mb-10 font-light animate-fade-in-up animation-delay-400">
            Diagnóstico avanzado, mantenimiento y reparación con la calidad que su VW merece.
          </p>

          <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
            <a 
              href="#reserva" 
              class="bg-brazil-yellow text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-2"
            >
              Reservar Cita Hoy
            </a>
            <a 
              href="#servicios" 
              class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 w-full h-2 flex z-20">
        <div class="w-1/3 bg-brazil-green"></div>
        <div class="w-1/3 bg-brazil-yellow"></div>
        <div class="w-1/3 bg-brazil-blue"></div>
      </div>
    </section>
    `;
};