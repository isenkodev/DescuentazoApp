import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panaderia',
  templateUrl: './panaderia.page.html',
  styleUrls: ['./panaderia.page.scss'],
})
export class PanaderiaPage implements OnInit {

  panaderia: any[] = [];  // Lista de productos de la categoría Panadería

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadPanaderia(); // Cargar los productos de la categoría Panadería desde el localStorage
  }

  // Cargar productos desde el localStorage
  loadPanaderia() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      const products = JSON.parse(storedProducts);  // Obtener los productos guardados
      this.panaderia = products.filter((p: any) => p.category === 'Panadería');  // Filtrar los productos por la categoría Panadería
    }
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  goToVistaprod(product: any) {
    this.router.navigate(['/vistaprod'], {
      state: { product: product }  // Pasamos el producto como estado
    });
  }
}
