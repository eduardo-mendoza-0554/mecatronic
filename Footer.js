// Footer.js
import { BUSINESS_INFO } from './constants.js';

export const renderFooter = () => {
    const currentYear = new Date().getFullYear();
    
    return `
    <footer class="bg-black text-gray-400 py-12 border-t border-gray-800">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-center md:text-left max-w-md">
            <h3 class="text-white font-bold text-xl tracking-wider mb-3">DEMOTRONIC</h3>
            <p class="text-sm text-gray-300 mb-3 leading-relaxed">
              Expertos en Volkswagen. Calidad, honestidad y técnica brasileña al servicio de tu vehículo.
            </p>
            <p class="text-xs text-gray-500 italic border-l-2 border-brazil-green pl-3">
              "En DEMOTRONIC, cada Volkswagen es tratado con la técnica y el respeto que merece."
            </p>
        </div>
        
        <div class="flex flex-col items-center gap-4">
            <p class="text-sm font-semibold text-white/80">Síguenos y Contáctanos</p>
            <div class="flex gap-6">
                <a 
                  href="https://www.facebook.com/share/1DA4MEJkvU/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-gray-400 hover:text-brazil-yellow transition-colors transform hover:scale-110 text-3xl"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-gray-400 hover:text-brazil-yellow transition-colors transform hover:scale-110 text-3xl"
                  aria-label="Instagram"
                >
                  i
                </a>
                <a 
                  href="https://wa.me/${BUSINESS_INFO.phone}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-gray-400 hover:text-brazil-green transition-colors transform hover:scale-110 text-3xl"
                  aria-label="WhatsApp"
                >
                  w
                </a>
            </div>
        </div>

        <div class="text-sm text-center md:text-right text-gray-500">
            <p class="mb-1">&copy; ${currentYear} Taller Demotronic.</p>
            <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
    `;
};