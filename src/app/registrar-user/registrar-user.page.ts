import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.page.html',
  styleUrls: ['./registrar-user.page.scss'],
})
export class RegistrarUserPage {

  email='';
  password='';

  constructor(private firebase:FirebaseService,private router: Router) {}

  ngOnInit() {
  
  }

  async registrar(){
    let usuario=await this.firebase.registrar(this.email,this.password);
    console.log(usuario);
    this.router.navigateByUrl("login")
  }
}
