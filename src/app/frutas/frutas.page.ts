import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {

  frutas: any[] = [];  
  
    constructor(private router:Router) { }
  
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
    goToHome() {
      this.router.navigate(['/home']);
    }
    goToVistaprod(product: any) {
      this.router.navigate(['/vistaprod'], {
        state: { product: product }  // Pasamos el producto como estado
      });
    }
  }
  
  