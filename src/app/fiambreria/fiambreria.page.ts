import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiambreria',
  templateUrl: './fiambreria.page.html',
  styleUrls: ['./fiambreria.page.scss'],
})
export class FiambreriaPage implements OnInit {

  fiambreria: any[] = [];  // Lista de productos de la categoría Panadería

  constructor(private router :Router) { }

  ngOnInit() {
    this.loadFiambreria(); // Cargar los productos de la categoría Panadería desde el localStorage
  }

  // Cargar productos desde el localStorage
  loadFiambreria() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      const products = JSON.parse(storedProducts);  // Obtener los productos guardados
      this.fiambreria = products.filter((p: any) => p.category === 'Fiambrería');  // Filtrar los productos por la categoría Panadería
    }
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}
