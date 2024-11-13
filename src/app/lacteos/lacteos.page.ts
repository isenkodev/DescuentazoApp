import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lacteos',
  templateUrl: './lacteos.page.html',
  styleUrls: ['./lacteos.page.scss'],
})
export class LacteosPage implements OnInit {

  lacteos: any[] = [];  // Lista de productos de la categoría Lácteos

  constructor() { }

  ngOnInit() {
    this.loadLacteos(); // Cargar los productos de la categoría Lácteos desde el localStorage
  }

  // Cargar productos desde el localStorage
  loadLacteos() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      const products = JSON.parse(storedProducts);  // Obtener los productos guardados
      this.lacteos = products.filter((p: any) => p.category === 'Lácteos');  // Filtrar los productos por la categoría Lácteos
    }
  }

}
