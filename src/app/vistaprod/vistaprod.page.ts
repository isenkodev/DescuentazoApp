import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vistaprod',
  templateUrl: './vistaprod.page.html',
  styleUrls: ['./vistaprod.page.scss'],
})
export class VistaprodPage implements OnInit {

  product: any;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    // Obtener el producto desde el estado de la navegación
    this.route.paramMap.subscribe(params => {
      const product = history.state?.product;
      if (product) {
        this.product = product;
      }
    });
  }
  calcularPrecioDescuento(precio: string): string {
    const originalPrice = parseFloat(precio);
    const descuento = parseFloat(this.product?.descuento || '');  // Si no hay descuento, se usa 0
    const discountedPrice = originalPrice - (originalPrice * (descuento / 100));  // Aplicamos el descuento
    return discountedPrice.toFixed(2);
  
  }
  
  goBack() {
    this.router.navigate(['/home']);  // Ajusta la ruta según tu configuración de enrutamiento
  }
  
}
