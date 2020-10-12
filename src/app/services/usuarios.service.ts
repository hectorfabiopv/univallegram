import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = 'https://univallegram-1920a.firebaseio.com/';

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: any) {
    return this.http.post(`${this.url}/personas.json`, usuario);
  }
}
