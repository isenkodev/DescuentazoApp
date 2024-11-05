import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importar Firebase Auth
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAccessGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,  // Usamos Firebase Auth
    private router: Router  // Para redirigir a otras rutas
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // Verificamos si el usuario está autenticado
    return this.afAuth.authState.pipe(
      take(1), 
      map(user => {
        // Si el usuario está autenticado y tiene el correo "g.huerta@example.com", dejamos pasar
        if (user && user.email === 'g.huerta@duocuc.cl') {
          return true;
        } else {
          // Si no es el correo esperado, lo redirigimos al home o página que desees
          this.router.navigate(['/home']);
          return false;
        }
      })
    );
  }
}
