import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router,private navCtrl: NavController) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/home']);
  }
  goToAddProduct() {
    this.navCtrl.navigateForward('/product-page');  // Navega a la página de "add-product"
  }
}
