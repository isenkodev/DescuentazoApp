import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

// Definir la interfaz Product para tipar los productos
interface Store {
  name: string;
  available: boolean;
}

interface Product {
  name: string;
  descuento: string;
  precionodes: string;
  desc: string;
  img: string;
  category: string;
  stores: Store[];  // Lista de supermercados y su disponibilidad
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {

  // Lista de supermercados
  supermarkets = [
    { name: 'Unimarc', selected: false },
    { name: 'Mayorista 10', selected: false },
    { name: 'Tottus', selected: false },
    { name: 'Lider', selected: false },
    { name: 'Jumbo', selected: false }
  ];

  // Variables para almacenar los productos de cada categoría
  lacteos: Product[] = [];
  verduras: Product[] = [];
  frutas: Product[] = [];
  abarrotes: Product[] = [];
  fiambreria: Product[] = [];
  panaderia: Product[] = [];

  // Producto que se va a agregar
  newProduct: Product = { name: '', descuento: '', precionodes: '', desc: '', img: '', category: '', stores: [] };

  // Lista de todos los productos
  products: Product[] = [];

  constructor(private toastController: ToastController, private router: Router) { }

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
  async saveProduct() {
    if (!this.newProduct.category) {
      const toast = await this.toastController.create({
        message: 'Por favor, seleccione una categoría',
        duration: 2000,
        color: 'danger',
        position: 'top',
      });
      await toast.present();
      return;
    }

    // Añadir la disponibilidad de los productos en los supermercados seleccionados
    const selectedStores = this.supermarkets.filter(store => store.selected).map(store => ({
      name: store.name,
      available: true  // Si está seleccionado, asumimos que está disponible
    }));

    // Asegurarnos de que el producto tiene al menos un supermercado seleccionado
    if (selectedStores.length === 0) {
      const toast = await this.toastController.create({
        message: 'Por favor, seleccione al menos un supermercado',
        duration: 2000,
        color: 'danger',
        position: 'top',
      });
      await toast.present();
      return;
    }

    // Asignar la lista de supermercados al nuevo producto
    this.newProduct.stores = selectedStores;

    this.products.push(this.newProduct);  // Agregar el producto al array de productos
    localStorage.setItem('products', JSON.stringify(this.products));  // Guardar en el localStorage
    this.filterCategories();  // Filtrar los productos por categoría nuevamente

    // Mostrar toast de éxito
    const successToast = await this.toastController.create({
      message: 'Producto agregado correctamente',
      duration: 2000,  // Duración en milisegundos
      color: 'success',
      position: 'top', // Posición: top, middle, bottom
    });
    await successToast.present();

    // Limpiar el formulario
    this.newProduct = { name: '', descuento: '', precionodes: '', desc: '', img: '', category: '', stores: [] };
    this.supermarkets.forEach(store => store.selected = false);  // Limpiar las selecciones de supermercados
  }

  // Función para manejar la selección de un archivo de imagen
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
  back() {
    this.router.navigate(['/admin']);
  }
}
