import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }
  nombre: string = "Raíces"
  logoRaices: string = "./assets/imgs/raicesimg.jpg"
  categorias: string[] = ['café','cereales','lacteos','souvenirs']
  correo: string = "juanandres1029@gmail.com"
}
