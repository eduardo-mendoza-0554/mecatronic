// Header.js
import { BUSINESS_INFO } from './constants.js';

// NOTA: Los iconos de Lucide-React no están disponibles en HTML/JS puro.
// Se usan placeholders o SVGs directos. Aquí usamos clases CSS para simularlos.
const getNavLinks = () => [
    { name: 'Inicio', href: 'inicio' },
    { name: 'Servicios', href: 'servicios' },
    { name: 'Quiénes Somos', href: 'nosotros' },
    { name: 'Ubicación', href: 'ubicacion' },
];

export const renderHeader = () => {
    const navLinksHTML = getNavLinks().map(link => `
        <li>
            <a 
                href="#${link.href}" 
                class="text-gray-900 hover:text-brazil-green transition-colors font-medium hover:scale-105"
            >
                ${link.name}
            </a>
        </li>
    `).join('');

    return `
    <header 
        id="main-header"
        class="fixed w-full z-50 transition-all duration-300 bg-transparent"
    >
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-20">
          
          <a href="#inicio" class="text-2xl font-black text-gray-900 flex items-center gap-2">
            <svg class="w-8 h-8 text-vw-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            DEMO<span class="text-brazil-green">TRONIC</span>
          </a>

          <nav class="hidden md:block">
            <ul class="flex space-x-8">
              ${navLinksHTML}
            </ul>
          </nav>
          
          <div class="flex items-center gap-4">
            <a 
              href="https://wa.me/${BUSINESS_INFO.phone}" 
              target="_blank"
              rel="noopener noreferrer"
              class="hidden lg:flex items-center gap-2 bg-brazil-green text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors shadow-lg"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
              Reservar Cita
            </a>

            <button id="mobile-menu-toggle" class="md:hidden p-2 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu-overlay" class="hidden absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col py-4">
        ${getNavLinks().map(link => `
            <a 
              href="#${link.href}"
              class="px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium border-b border-gray-100 last:border-0"
            >
              ${link.name}
            </a>
        `).join('')}
        <div class="p-4 flex flex-col gap-3">
            <a 
              href="https://wa.me/${BUSINESS_INFO.phone}"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 w-full text-center bg-white border-2 border-brazil-green text-brazil-green py-3 rounded-lg font-bold"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.627C5.172 15.338 6 14.1 6 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              Chat WhatsApp
            </a>
            <a 
              href="#reserva"
              class="flex items-center justify-center gap-2 w-full text-center bg-brazil-yellow text-gray-900 py-3 rounded-lg font-bold"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h.01M12 11h.01M15 11h.01M7 15h10a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-1a1 1 0 011-1z"></path></svg>
              Reservar Cita
            </a>
        </div>
      </div>
    </header>
    `;
};