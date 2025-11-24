// Consultation.js
import { BUSINESS_INFO } from './constants.js';

export const renderConsultation = () => {
    return `
    <section id="consulta" class="py-24 bg-brazil-blue scroll-mt-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div class="text-white">
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              ¿Problemas con tu Volkswagen? <span class="text-brazil-yellow">Consúltanos.</span>
            </h2>
            <p class="text-lg mb-6 opacity-90">
              Antes de reservar, si tienes dudas sobre un síntoma o problema, descríbelo aquí y nuestro técnico ${BUSINESS_INFO.owner} te orientará directamente por WhatsApp.
            </p>
            <ul class="space-y-3 font-medium">
              <li class="flex items-start gap-3">
                <span class="text-brazil-yellow mt-1">✓</span>
                <span>Diagnóstico inicial sin compromiso.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-brazil-yellow mt-1">✓</span>
                <span>Respuesta rápida en horario de oficina.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-brazil-yellow mt-1">✓</span>
                <span>Asesoramiento experto de un especialista VW.</span>
              </li>
            </ul>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-xl shadow-2xl">
            <h3 class="text-2xl font-bold text-slate-800 mb-6 text-center">
              Enviar mi Consulta Técnica
            </h3>
            
            <form id="consultation-form" class="space-y-5">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Modelo de Vehículo (Opcional)</label>
                <input 
                  type="text" 
                  name="model"
                  placeholder="Ej. Vw Gol 2018, Tiguan, Amarok..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brazil-blue focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Describe el Problema o Síntoma *</label>
                <textarea 
                  required
                  name="problem"
                  rows="4"
                  placeholder="Ej. Escucho un golpe seco al pasar baches, o se prende la luz de check engine cuando acelero..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brazil-blue focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                class="w-full bg-brazil-green text-white font-bold py-4 rounded-lg text-lg shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span class="text-xl">→</span>
                Enviar Consulta por WhatsApp
              </button>
              
              <p class="text-center text-xs text-slate-400 mt-4">
                Serás redirigido al chat de WhatsApp de ${BUSINESS_INFO.name}
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
    `;
};