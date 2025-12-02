// BookingForm.js
import { SERVICE_OPTIONS } from './constants.js';

export const renderBookingForm = () => {
    const serviceOptionsHTML = SERVICE_OPTIONS.map(option => `
        <option value="${option}">${option}</option>
    `).join('');
    
    // NOTA: La lógica de JS para enviar el formulario a WhatsApp está en main.js
    
    // Obtenemos el año actual para establecer el máximo en el input de año
    const maxYear = new Date().getFullYear() + 1;

    return `
    <section id="reserva" class="py-20 bg-brazil-green text-white scroll-mt-24">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div class="text-white">
            <p class="text-sm font-bold uppercase text-brazil-yellow mb-2 tracking-widest">
                Agenda tu Servicio
            </p>
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Reserva tu Cita <span class="text-vw-blue">con el Experto</span>
            </h2>
            <p class="text-lg mb-6 opacity-90">
              Complete el formulario y envíenos los datos. Nos pondremos en contacto por WhatsApp para confirmar la disponibilidad de la fecha y hora seleccionadas.
            </p>
            <div class="flex items-center gap-4 border-l-4 border-brazil-yellow pl-4 py-2 bg-white/10">
                <span class="text-brazil-yellow text-2xl">i</span>
                <p class="text-sm font-semibold">
                    Atención: La reserva se confirma únicamente tras nuestra validación por WhatsApp.
                </p>
            </div>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-xl shadow-2xl">
            <h3 class="text-2xl font-bold text-slate-800 mb-6 text-center">
              Detalles de la Cita
            </h3>
            
            <form id="booking-form" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Nombre Completo *</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
                    <input 
                      required
                      type="text" 
                      name="name"
                      placeholder="Tu Nombre"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brazil-green focus:border-transparent outline-none text-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">WhatsApp / Contacto *</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📞</span>
                    <input 
                      required
                      type="tel" 
                      name="contact"
                      placeholder="7XXXXXXX"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brazil-green focus:border-transparent outline-none text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Modelo VW *</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🚗</span>
                    <input 
                      required
                      type="text" 
                      name="carModel"
                      placeholder="Ej. Gol, Tiguan"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brazil-green focus:border-transparent outline-none text-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Año</label>
                  <div class="relative">
                    <input 
                      type="number" 
                      name="carYear"
                      placeholder="Ej. 2018"
                      min="1990"
                      max="${maxYear}"
                      class="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brazil-green focus:border-transparent outline-none text-gray-900"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Servicio Requerido *</label>
                <select 
                  required
                  name="serviceType"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brazil-green focus:border-transparent outline-none bg-white text-gray-900"
                >
                  <option value="">Selecciona un Servicio</option>
                  ${serviceOptionsHTML}
                </select>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Fecha Preferida *</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🗓️</span>
                    <input 
                      required
                      type="date" 
                      name="date"
                      min="${new Date().toISOString().split('T')[0]}"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brazil-green focus:border-transparent outline-none text-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Hora Preferida *</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">⏰</span>
                    <input 
                      required
                      type="time" 
                      name="time"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brazil-green focus:border-transparent outline-none text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                class="w-full bg-brazil-yellow text-black font-bold py-4 rounded-lg text-lg shadow-md hover:bg-yellow-400 transition-all transform hover:-translate-y-1"
              >
                CONFIRMAR RESERVA (Vía WhatsApp)
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    `;
};

