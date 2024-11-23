import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  errorMessage: string = '';  // Mensaje de error cuando no se encuentra la categoría
  searchTerm: string = '';    // Término de búsqueda del usuario

  recomendados = [
    { img: 'assets/images/mayo.png', nombre: 'Mayo Kraft', precio: 1000 },
    { img: 'assets/images/cloro.png', nombre: 'Cloro', precio: 800 },
    { img: 'assets/images/completo.png', nombre: 'Completo', precio: 1200 },
  ];
  ofertas = [
    { img: 'assets/images/jugo.png', nombre: 'Jugos en polvo Yupi', precios: 200 },
    { img: 'assets/images/comida-de-perro.png', nombre: 'Comida para perro', precios: 15000 },
    { img: 'assets/images/cereal.png', nombre: 'Cereal Zucaritas', precios: 25000 },
  ];

  constructor(private router: Router) {}

  // Método para manejar la búsqueda y redirigir según la categoría
  onSearch() {
    const searchTerm = this.searchTerm.toLowerCase();

    if (searchTerm === 'lacteos') {
      this.router.navigate(['/lacteos']);
      this.errorMessage = '';  // Limpiar el mensaje de error
    } else if (searchTerm === 'abarrotes') {
      this.router.navigate(['/abarrotes']);
      this.errorMessage = '';
    } else if (searchTerm === 'panaderia') {
      this.router.navigate(['/panaderia']);
      this.errorMessage = '';
    } else if (searchTerm === 'frutas') {
      this.router.navigate(['/frutas']);
      this.errorMessage = '';
    } else if (searchTerm === 'verduras') {
      this.router.navigate(['/verduras']);
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Categoría no existente'; // Mostrar mensaje de error si no se encuentra la categoría

      // Ocultar el mensaje de error después de 2 segundos
      setTimeout(() => {
        this.errorMessage = '';  // Limpiar el mensaje de error
      }, 2000);  // 2000 ms = 2 segundos
    }
  }

  // Funciones para calcular precios con descuento
  calcularPrecioDescuento(precio: number): number {
    return precio - (precio * 0.1);  // Descuento del 10%
  }

  calcularPrecioDescuentos(precios: number): number {
    return precios - (precios * 0.1);  // Descuento del 10%
  }

  // Función de logout
  logout() {
    console.log('Cerrando sesión...');
    // Aquí puedes agregar lógica para cerrar sesión, por ejemplo limpiar el almacenamiento local
    this.router.navigate(['/login']);  // Redirige al login
  }

  // Función para ir a la página de Favoritos
  goToFavoritos() {
    this.router.navigate(['/favpage']);  // Redirige a la página de Favoritos
  }

  // Función para ir a la página principal
  goToHome() {
    this.router.navigate(['/home']); // Redirige a la página principal
  }
}
