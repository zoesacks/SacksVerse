// Mapa interactivo para la página de contacto
function initMap() {
  // Coordenadas de ejemplo (cambiar por las reales)
  const location = { lat: 40.416775, lng: -3.703790 };
  
  // Verificar si el elemento del mapa existe
  const mapElement = document.getElementById('map');
  
  if (!mapElement) return;
  
  // Estilo oscuro para el mapa
  const darkMapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#38414e' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }]
    }
  ];
  
  // Crear el mapa
  const map = new google.maps.Map(mapElement, {
    center: location,
    zoom: 15,
    styles: darkMapStyle,
    disableDefaultUI: true,
    zoomControl: true
  });
  
  // Crear marcador personalizado
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: '#00c8ff',
      fillOpacity: 1,
      strokeColor: '#ffffff',
      strokeWeight: 2
    },
    title: 'Nuestra ubicación'
  });
  
  // Animación del marcador
  marker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(() => {
    marker.setAnimation(null);
  }, 2000);
  
  // Información al hacer clic en el marcador
  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="color: #121212; padding: 10px; max-width: 200px;">
        <h3 style="margin: 0 0 10px; font-family: 'Orbitron', sans-serif;">EQUIPO</h3>
        <p style="margin: 0; font-family: 'Space Mono', monospace;">
          Dirección de ejemplo<br>
          Ciudad, País<br>
          +123 456 7890
        </p>
      </div>
    `
  });
  
  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });
}