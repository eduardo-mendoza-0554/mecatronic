// constants.js

export const BUSINESS_INFO = {
    name: "Taller Demotronic",
    owner: "Demetrio Machaca",
    phone: "59179640548", // Número de WhatsApp sin espacios
    displayPhone: "79640548", // Número para mostrar
    location: "C. Héroes del Acre, Zona Cotahuma, La Paz, Bolivia",
    mapLink: "https://goo.gl/maps/placeholder-link", // Reemplazar con el link real de Google Maps
    slogan: "Expertos en Volkswagen. Calidad, honestidad y técnica brasileña.",
    foundedYear: 2009
};

export const SERVICES = [
  { 
    id: 1, 
    title: 'Diagnóstico Electrónico Avanzado', 
    shortDescription: 'Identificación precisa de fallas con software VW original, garantizando la reparación a la primera.', 
    icon: 'Laptop', 
    color: 'text-vw-blue', 
    details: [
      { type: 'Info', text: 'Uso de escáneres de fábrica para un diagnóstico sin margen de error.' },
      { type: 'Check', text: 'Lectura de códigos de error complejos y análisis en tiempo real.' },
      { type: 'Check', text: 'Programación y actualización de módulos (ECU, ABS, Airbag).' },
      { type: 'Alert', text: 'Soluciona problemas que otros talleres no pueden encontrar.' },
    ] 
  },
  { 
    id: 2, 
    title: 'Mantenimiento Preventivo Total', 
    shortDescription: 'Cambio de aceites, filtros, bujías y líquidos con repuestos certificados VW y técnica especializada.', 
    icon: 'Wrench', 
    color: 'text-brazil-green', 
    details: [
      { type: 'Check', text: 'Revisión completa de 50 puntos vitales del vehículo.' },
      { type: 'Check', text: 'Aceite sintético de alta calidad y filtros originales.' },
      { type: 'Check', text: 'Servicio rápido y eficiente, con historial de mantenimiento.' },
      { type: 'Info', text: 'Garantiza la longevidad y el buen funcionamiento de su motor.' },
    ] 
  },
  { 
    id: 3, 
    title: 'Afinación y Potencia de Motores', 
    shortDescription: 'Optimización del rendimiento, eficiencia de combustible y respuesta del motor con técnica brasileña y equipos de precisión.', 
    icon: 'Gauge', 
    color: 'text-brazil-yellow', 
    details: [
      { type: 'Check', text: 'Ajuste fino de la inyección electrónica.' },
      { type: 'Check', text: 'Limpieza de inyectores por ultrasonido.' },
      { type: 'Check', text: 'Reemplazo de bujías y bobinas originales.' },
      { type: 'Info', text: 'Sentirá la diferencia en la potencia y el consumo.' },
    ] 
  },
  { 
    id: 4, 
    title: 'Reparación de Suspensión y Frenos', 
    shortDescription: 'Seguridad garantizada. Reparación y reemplazo de amortiguadores, frenos ABS y sistemas de dirección.', 
    icon: 'Car', 
    color: 'text-red-500', 
    details: [
      { type: 'Check', text: 'Diagnóstico computarizado del sistema ABS/ESP.' },
      { type: 'Check', text: 'Uso de repuestos de alta calidad para máxima durabilidad.' },
      { type: 'Check', text: 'Ajuste de tren delantero y trasero.' },
      { type: 'Alert', text: 'No comprometa su seguridad. Confíe en expertos.' },
    ] 
  }
];

// Opciones simplificadas para el formulario de reserva/consulta
export const SERVICE_OPTIONS = SERVICES.map(s => ({ value: s.title, label: s.title }));


export const WHY_CHOOSE_US_BENEFITS = [
  { id: 1, title: 'Especialización VW', description: 'No somos generalistas. Conocemos cada detalle, sensor y componente de tu Volkswagen.', icon: 'BadgeCheck', color: 'text-brazil-green' },
  { id: 2, title: 'Técnica Brasileña', description: 'Aplicamos metodologías de reparación y diagnóstico estandarizadas en Brasil, cuna técnica de VW.', icon: 'GraduationCap', color: 'text-brazil-yellow' },
  { id: 3, title: 'Tecnología Avanzada', description: 'Utilizamos escáneres y software de última generación específicos para la línea VW.', icon: 'Laptop', color: 'text-vw-blue' },
  { id: 4, title: 'Atención Personalizada', description: 'Te ofrecemos un trato directo con el técnico Demetrio, sin intermediarios, con total honestidad.', icon: 'HeartHandshake', color: 'text-red-500' }
];

export const TESTIMONIALS = [
    { id: 1, name: "Carlos Méndez", role: "VW Gol 2019", content: "Llevaba meses con un ruido que otros no encontraban. En Demotronic diagnosticaron en 15 minutos con su escáner. ¡Increíble servicio!", rating: 5 },
    { id: 2, name: "Andrea Ruiz", role: "VW Tiguan", content: "Me encanta la transparencia. Te explican exactamente qué van a hacer y por qué. Mi Tiguan quedó perfecta.", rating: 5 },
    { id: 3, name: "Roberto Siles", role: "VW Amarok", content: "La técnica brasileña se nota. El ajuste de motor que le hicieron a mi camioneta le devolvió toda la potencia.", rating: 5 },
    { id: 4, name: "Lucía Vargas", role: "VW Polo Track", content: "Excelente atención. Me explicaron con paciencia el mantenimiento. Se ganaron mi confianza total.", rating: 5 },
];