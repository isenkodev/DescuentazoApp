import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginServiceService } from '../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTerm: string = '';
  recomendados = [
    { img: 'assets/images/mayo.png', nombre: 'Mayo Kraft', precio: 1000 },
    { img: 'assets/images/cloro.png', nombre: 'Cloro', precio: 800 },
    { img: 'assets/images/completo.png', nombre: 'Completo', precio: 1200 },
  ];
  ofertas = [
    { img: 'assets/images/jugo.png', nombre: 'Jugos en polvo yupi', precios: 200 },
    { img: 'assets/images/comida-de-perro.png', nombre: 'Comida pra perro', precios: 15000 },
    { img: 'assets/images/cereal.png', nombre: 'Cereal Zucaritas', precios: 25000 },
  ];

  constructor(private router: Router) {}

  calcularPrecioDescuento(precio: number): number {
    return precio - (precio * 0.1);
  }

  calcularPrecioDescuentos(precios: number): number {
    return precios - (precios * 0.1);
  }
  logout() {
    console.log('Cerrando sesión...');
    // Aquí puedes agregar lógica para cerrar sesión, por ejemplo limpiar el almacenamiento local
    this.router.navigate(['/login']);  // Redirige al login
  }

  goToFavoritos() {
    this.router.navigate(['/favpage']);  // Redirige a la página de Favoritos
  }

  goToHome() {
    this.router.navigate(['/home']); // Redirige a la página principal
  }
}
