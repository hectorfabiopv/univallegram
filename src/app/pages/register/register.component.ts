import { Component, OnInit } from '@angular/core';
import { usuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: usuarioModel;

  constructor(private auth: AuthService) { }

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
  }
}
