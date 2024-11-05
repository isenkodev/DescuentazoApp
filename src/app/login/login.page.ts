import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginServiceService } from '../service/login.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  pass: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController,
    private loginService: LoginServiceService,
    private firebase: FirebaseService,
  ) {}

  async login() {
    try {
      // Inicia sesión con el servicio de Firebase
      let usuario = await this.firebase.auth(this.email, this.pass);

      if (usuario) {
        // Aquí verificamos el correo del usuario y redirigimos según corresponda
        if (this.email === 'g.huerta@duocuc.cl') {
          // Si es el admin, lo redirigimos al panel de administración
          this.router.navigate(['/admin']);
        } else {
          // Si no es admin, lo redirigimos a la página principal
          this.router.navigate(['/home']);
        }

        // Llamamos al servicio de login (si necesitas realizar alguna acción adicional)
        this.loginService.login(); 
      } else {
        this.toastMessage('Error en la autenticación.', 'danger');
      }
    } catch (error) {
      console.error(error);
      this.toastMessage('Error en la autenticación.', 'danger');
    }
  }

  async toastMessage(message: string, type: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: type,
      position: 'top',
    });
    toast.present();
  }

  RegistrarUser() {
    this.router.navigate(['/registrar-user']); // Redirige a la ruta registrar-user
  }

  RestablecerPass() {
    this.router.navigate(['/restablecer-pass']); // Redirige a la ruta restablecer-pass
  }
}
