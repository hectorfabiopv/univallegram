import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { usuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = 'https://univallegram-1920a.firebaseio.com/';

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: any) {
    return this.http.post(`${this.url}/personas.json`, usuario);
  }

  getUsuarios() {
    return this.http.get(`${this.url}/personas.json`).pipe(
      map(this.crearArreglo)
    );
  }

  private crearArreglo(personasObj: object) {
    const personas : usuarioModel[] = [];

    if(personasObj == null) { return []; }

    Object.keys(personasObj).forEach(key=>{
      const persona: usuarioModel = personasObj[key];
      //persona.id = key;
      personas.push(persona);
    });

    return personas;
  }
}
