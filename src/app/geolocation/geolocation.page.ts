import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet'; // Para usar Leaflet

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage {
  map: L.Map | undefined; // Referencia al mapa
  marker: L.Marker | undefined; // Referencia al marcador
  latitude: string = '';
  longitude: string = '';
  accuracy: string = '';

  // Método para obtener la posición actual y mostrar el mapa
  async getCurrentPosition() {
    try {
      const position = await Geolocation.getCurrentPosition();
      if (position && position.coords) {
        // Guardar coordenadas y precisión
        this.latitude = position.coords.latitude.toString();
        this.longitude = position.coords.longitude.toString();
        this.accuracy = position.coords.accuracy.toString();

        console.log('Ubicación obtenida:', position);

        // Mostrar el mapa y el marcador
        this.loadMap(position.coords.latitude, position.coords.longitude);
      } else {
        console.error('No se pudo obtener la ubicación');
      }
    } catch (error) {
      console.error('Error al obtener la ubicación', error);
    }
  }

  // Método para inicializar el mapa
  loadMap(lat: number, lng: number) {
    if (!this.map) {
      // Crear el mapa centrado en la ubicación actual
      this.map = L.map('map').setView([lat, lng], 16);

      // Agregar capa de OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(this.map);
    }

    // Si ya existe un marcador, actualiza su posición
    if (this.marker) {
      this.marker.setLatLng([lat, lng]).bindPopup('Estás aquí').openPopup();
    } else {
      // Crear un nuevo marcador
      this.marker = L.marker([lat, lng])
        .addTo(this.map)
        .bindPopup('Estás aquí')
        .openPopup();
    }
  }
}
