import { Component, OnInit } from '@angular/core';
import { usuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: usuarioModel = new usuarioModel();
  personas: usuarioModel[] = [];
  emailUserLogged: string;

  constructor(private auth: AuthService, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    
    if(form.invalid) {
      return;
    }

    this.auth.login(this.usuario)
    .subscribe(resp => {
      console.log(resp);
      this.emailUserLogged = resp['email'];

      this.usuariosService.getUsuarios().subscribe(resp=>{
        this.personas = resp;
        console.log(this.personas);
        this.personas.forEach(usuario => {
          if(usuario.email == this.emailUserLogged) {
            localStorage.setItem('userLogged', JSON.stringify(usuario));
          }
        });

      });
    }, (err) => {
      console.log(err.error.error.message);
    });
  }
}
