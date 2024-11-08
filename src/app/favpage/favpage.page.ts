import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favpage',
  templateUrl: './favpage.page.html',
  styleUrls: ['./favpage.page.scss'],
})
export class FavpagePage implements OnInit {
  searchTerm: string = '';
  favoritos = [
    {
      nombre: 'Manjar',
      descripcion: 'Manjar nestlé 1k',
      precio: 2000,
      desc: 'Descuento del 15%',
      img: '../assets/images/favmanjar.png',
    },
    {
      nombre: 'Arroz',
      descripcion: 'Arroz tucapel 1k',
      precio: 1500,
      desc: 'Descuento del 15%',
      img: '../assets/images/arroz.png',
    },
    {
      nombre: 'Lechuga',
      descripcion: 'Lechuga Dole',
      precio: 2400,
      desc: 'Descuento del 10%',
      img: '../assets/images/lechuga.png',
    },
    {
      nombre: 'Fideos',
      descripcion: 'Lechuga Dole',
      precio:990,
      desc: 'Descuento del 20%',
      img: '../assets/images/fideos.png',
    },
   

    // Agrega más productos según sea necesario
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    console.log('Cerrando sesión...');
    // Aquí puedes agregar lógica para cerrar sesión, por ejemplo limpiar el almacenamiento local
    this.router.navigate(['/login']);  // Redirige al login
  }

  goToHome() {
    this.router.navigate(['/home']); // Redirige a la página principal
  }
  goToFavoritos() {
    this.router.navigate(['/favpage']);  // Redirige a la página de Favoritos
  }

}
