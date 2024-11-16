import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http'; // Para hacer peticiones HTTP

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage {

  latitude: string = '';
  longitude: string = '';
  accuracy: string = '';
  supermarkets: any[] = []; // Para almacenar los resultados de supermercados

  constructor(private http: HttpClient) {}

  // Método para obtener la posición actual
  async getCurrentPosition() {
    try {
      const position = await Geolocation.getCurrentPosition();
      if (position && position.coords) {
        // Guardamos las coordenadas
        this.latitude = position.coords.latitude.toString();
        this.longitude = position.coords.longitude.toString();
        this.accuracy = position.coords.accuracy.toString();
        
        // Llamamos a la función para buscar supermercados cercanos
        this.getNearbySupermarkets(position.coords.latitude, position.coords.longitude);
        
        console.log('Ubicación obtenida:', position);
      } else {
        console.error('No se pudo obtener la ubicación');
      }
    } catch (error) {
      console.error('Error al obtener la ubicación', error);
    }
  }

  // Método para buscar supermercados cercanos utilizando la Google Places API
  getNearbySupermarkets(lat: number, lng: number) {
    const apiKey = 'TU_API_KEY'; // Sustituye con tu clave de API de Google
    const radius = 5000; // Radio de búsqueda en metros (5 km en este caso)
    const type = 'supermarket'; // Tipo de lugar que estamos buscando
  
    const url = `/google-places/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${apiKey}`;

    
    this.http.get(url).subscribe((response: any) => {
      if (response.results) {
        this.supermarkets = response.results;
        console.log('Supermercados cercanos:', this.supermarkets);
      } else {
        console.error('No se encontraron supermercados cercanos');
      }
    });
  }
  
}
