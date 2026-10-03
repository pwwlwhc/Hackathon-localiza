// Chave pública de frontend: restrinja por HTTP referrer e por API no Google Cloud.
window.APP_CONFIG = {
  GOOGLE_MAPS_API_KEY: 'AIzaSyCwcqUj0uwnX9_WIo_H4Y5f81BPHY0V0kE',
  GOOGLE_MAPS_MAP_ID: 'DEMO_MAP_ID', // ID de demonstração para Advanced Markers.
  // Use null para voltar a solicitar a localização do navegador.
  FIXED_LOCATION: {
    lat: -19.8819464,
    lng: -43.9469244,
    address: 'R. Gurupá, 33 - Cachoeirinha, Belo Horizonte - MG, 31150-180',
  },
};
