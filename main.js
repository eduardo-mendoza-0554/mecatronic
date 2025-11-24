import { BUSINESS_INFO, SERVICES } from './constants.js';
// Importa las funciones de renderizado de cada componente
import { renderHeader } from './Header.js';
import { renderHero } from './Hero.js';
import { renderServices } from './Services.js';
import { renderWhyChooseUs } from './WhyChooseUs.js';
import { renderAboutAndLocation } from './AboutAndLocation.js';
import { renderConsultation } from './Consultation.js';
import { renderTestimonials } from './Testimonials.js';
import { renderBookingForm } from './BookingForm.js';
import { renderFooter } from './Footer.js';

// Función principal de inicialización
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

    // 2. LÓGICA DE INTERACCIÓN

    // A. Lógica de Header Fijo y Menú Móvil
    setupHeaderAndMenu();

    // B. Lógica del Formulario de Reserva (Booking Form)
    setupBookingForm();

    // C. Lógica del Formulario de Consulta (Consultation Form)
    setupConsultationForm();

    // D. Lógica del Modal de Servicios
    setupServiceModal();
});

// --- FUNCIONES DE LÓGICA DE INTERACCIÓN ---

function setupHeaderAndMenu() {
    const header = document.getElementById('main-header');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    // Efecto de Scroll en el Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-md');
        } else {
            header.classList.remove('bg-white', 'shadow-md');
        }
    });

    // Toggle de Menú Móvil
    if (mobileMenuToggle && mobileMenuOverlay) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuOverlay.classList.toggle('hidden');
        });

        // Cerrar menú al hacer clic en un enlace
        mobileMenuOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuOverlay.classList.add('hidden');
            });
        });
    }
}

function setupBookingForm() {
    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData.entries());

        const message = `
*--- SOLICITUD DE RESERVA DE CITA ---*

¡Hola Demotronic! Quiero reservar una cita con los siguientes detalles:

*Nombre:* ${data.name}
*Contacto:* ${data.contact}
*Vehículo:* VW ${data.carModel} (${data.carYear || 'Año no especificado'})
*Servicio Requerido:* ${data.serviceType}

*Fecha/Hora Preferida:* ${data.date} a las ${data.time}

Por favor, confirmen la disponibilidad. ¡Gracias!
        `.trim();

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phone}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    });
}

function setupConsultationForm() {
    const consultationForm = document.getElementById('consultation-form');

    consultationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(consultationForm);
        const data = Object.fromEntries(formData.entries());
        
        const carModel = data.model ? `Mi vehículo es un *VW ${data.model}*.` : 'Mi vehículo es un VW. (Modelo no especificado).';

        const message = `
*--- CONSULTA TÉCNICA VW ---*

¡Hola Demetrio! Tengo una consulta técnica.

${carModel}

*Problema/Síntoma:*
${data.problem}

¿Podrían brindarme una orientación? ¡Gracias!
        `.trim();

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phone}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    });
}


function setupServiceModal() {
    // 1. Crear el Modal DOM (Hidden por defecto)
    const modalHTML = `
        <div id="service-modal" class="fixed inset-0 bg-black bg-opacity-70 z-[100] hidden items-center justify-center p-4 transition-opacity duration-300">
            <div class="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-95 opacity-0" id="modal-content">
                <div class="p-8">
                    <div class="flex justify-between items-start border-b pb-4 mb-4">
                        <h3 class="text-2xl font-bold text-vw-blue" id="modal-title"></h3>
                        <button id="close-modal" class="text-gray-400 hover:text-gray-900 transition-colors text-2xl font-light leading-none">
                            &times;
                        </button>
                    </div>
                    <div id="modal-body" class="space-y-4">
                        </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('service-modal');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModalButton = document.getElementById('close-modal');

    // 2. Función para inyectar detalles y mostrar
    const showServiceDetails = (serviceId) => {
        const service = SERVICES.find(s => s.id == serviceId);
        if (!service) return;

        modalTitle.textContent = service.title;
        
        const detailsHTML = service.details.map(detail => {
            let icon = '';
            let color = '';
            if (detail.type === 'Check') {
                icon = '✅';
                color = 'text-brazil-green';
            } else if (detail.type === 'Info') {
                icon = 'ℹ️';
                color = 'text-brazil-blue';
            } else if (detail.type === 'Alert') {
                icon = '⚠️';
                color = 'text-brazil-yellow';
            }
            
            return `
                <div class="flex items-start gap-3">
                    <span class="text-lg ${color} flex-shrink-0">${icon}</span>
                    <p class="text-slate-700">${detail.text}</p>
                </div>
            `;
        }).join('');

        modalBody.innerHTML = `
            <p class="text-md font-semibold text-slate-900 mb-4">${service.shortDescription}</p>
            ${detailsHTML}
            <a href="#reserva" id="modal-reserve-btn" class="mt-6 block w-full text-center bg-brazil-yellow text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                Reservar Cita para este Servicio
            </a>
        `;

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
    };

    // 3. Función para ocultar modal
    const hideModal = () => {
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }, 300);
    };

    // 4. Asignar Eventos
    document.querySelectorAll('.view-service-details').forEach(button => {
        button.addEventListener('click', (e) => {
            showServiceDetails(e.currentTarget.dataset.serviceId);
        });
    });

    closeModalButton.addEventListener('click', hideModal);
    
    // Cerrar si se hace clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            hideModal();
        }
    });

    // Asegurar que el botón de reservar dentro del modal también cierre el modal al hacer clic
    document.body.addEventListener('click', (e) => {
        if (e.target.id === 'modal-reserve-btn') {
            hideModal();
        }
    });
}