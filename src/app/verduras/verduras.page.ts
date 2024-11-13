import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.page.html',
  styleUrls: ['./verduras.page.scss'],
})
export class VerdurasPage implements OnInit {

  verduras: any[] = [];  

  constructor() { }

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

}

