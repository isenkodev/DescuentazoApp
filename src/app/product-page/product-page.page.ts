import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera'; // Importamos la cámara de Capacitor

// Definir la interfaz Product para tipar los productos
interface Product {
  name: string;
  descuento: string;
  precionodes: string;
  desc: string;
  img: string;
  category: string;
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {

  // Variables para almacenar los productos de cada categoría
  lacteos: Product[] = [];
  verduras: Product[] = [];
  frutas: Product[] = [];
  abarrotes: Product[] = [];
  fiambreria: Product[] = [];
  panaderia: Product[] = [];

  // Producto que se va a agregar
  newProduct: Product = { name: '', descuento: '', precionodes: '', desc: '', img: '', category: '' };

  // Lista de todos los productos
  products: Product[] = []; 

  constructor() { }

  ngOnInit() {
    this.loadProducts();  // Cargar los productos desde el localStorage
  }

  // Cargar los productos del localStorage
  loadProducts() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
      this.filterCategories();  // Filtrar los productos por categoría
    }
  }

  // Filtrar los productos y asignarlos a cada categoría
  filterCategories() {
    this.lacteos = this.products.filter((p: Product) => p.category === 'Lácteos');
    this.verduras = this.products.filter((p: Product) => p.category === 'Verduras');
    this.frutas = this.products.filter((p: Product) => p.category === 'Frutas');
    this.abarrotes = this.products.filter((p: Product) => p.category === 'Abarrotes');
    this.fiambreria = this.products.filter((p: Product) => p.category === 'Fiambrería');
    this.panaderia = this.products.filter((p: Product) => p.category === 'Panadería');
  }

  // Guardar un nuevo producto en el localStorage
  saveProduct() {
    if (!this.newProduct.category) {
      alert('Por favor, seleccione una categoría');
      return;
    }

    this.products.push(this.newProduct);  // Agregar el producto al array de productos
    localStorage.setItem('products', JSON.stringify(this.products));  // Guardar en el localStorage
    this.filterCategories();  // Filtrar los productos por categoría nuevamente
    this.newProduct = { name: '', descuento: '', precionodes: '', desc: '', img: '', category: '' };  // Limpiar el formulario
  }

  // Función para tomar una foto con la cámara
  // Manejar la selección de un archivo de imagen
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newProduct.img = e.target.result;  // Asignar la imagen seleccionada al producto
      };
      reader.readAsDataURL(file);
    }
  }
 // Función para eliminar un producto
 deleteProduct(product: Product) {
  let products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
  
  // Eliminar el producto de la lista completa
  products = products.filter(p => p.name !== product.name); // Elimina el producto por el nombre

  // Actualizar el localStorage con la nueva lista
  localStorage.setItem('products', JSON.stringify(products));

  // Recargar los productos después de eliminar
  this.loadProducts();
}
}
