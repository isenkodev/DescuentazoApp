import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {

  frutas: any[] = [];  
  
    constructor() { }
  
    ngOnInit() {
      this.loadFrutas(); 
    }
  
    
    loadFrutas() {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        const products = JSON.parse(storedProducts); 
        this.frutas = products.filter((p: any) => p.category === 'Frutas');  
      }
    }
  
  }
  
  