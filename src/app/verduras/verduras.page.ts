import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.page.html',
  styleUrls: ['./verduras.page.scss'],
})
export class VerdurasPage implements OnInit {

  verduras: any[] = [];  

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadVerduras(); 
  }

  
  loadVerduras() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      const products = JSON.parse(storedProducts); 
      this.verduras = products.filter((p: any) => p.category === 'Verduras');  
    }
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}

