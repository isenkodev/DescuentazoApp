import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abarrotes',
  templateUrl: './abarrotes.page.html',
  styleUrls: ['./abarrotes.page.scss'],
})
export class AbarrotesPage implements OnInit {

  abarrotes: any[] = [];  

  constructor() { }

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

}

