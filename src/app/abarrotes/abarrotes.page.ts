import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abarrotes',
  templateUrl: './abarrotes.page.html',
  styleUrls: ['./abarrotes.page.scss'],
})
export class AbarrotesPage implements OnInit {

  abarrotes: any[] = [];  

  constructor(private router :Router) { }

  ngOnInit() {
    this.loadAbarrotes(); 
  }

  
  loadAbarrotes() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      const products = JSON.parse(storedProducts); 
      this.abarrotes = products.filter((p: any) => p.category === 'Abarrotes');  
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

