import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  auth = {
    loggedIn : false
  };
  
  public router: RouterModule;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.setAuth();
  }

  //Establece la propiedad loggedIn de la propiedad auth de este componente para verificar el login
  setAuth() {
    if(this.authService.leerToken() === '') {
      this.auth.loggedIn = false;
    } else {
      this.auth.loggedIn = true;
    }
  }
}
