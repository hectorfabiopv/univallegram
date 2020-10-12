import { Component, OnInit } from '@angular/core';
import { usuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: usuarioModel;

  constructor(private auth: AuthService, private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuario = new usuarioModel();
  }

  onSubmit(form: NgForm) {
    if(form.invalid) {return;}

    this.auth.nuevoUsuario(this.usuario)
    .subscribe(resp => {
      console.log(resp);
    }, (err)=>{
      console.log(err.error.error.message);
    });

    const datosUsuario = {
      codigo: this.usuario.codigo,
      nombreCompleto: this.usuario.nombreCompleto,
      idCanal: this.usuario.idCanal,
      email: this.usuario.email
    }

    this.usuarioService.crearUsuario(datosUsuario)
    .subscribe(resp => {
      console.log(resp);
    }); 
  }
}
