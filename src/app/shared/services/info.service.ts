import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }
  nombre: string = "Raíces"
  logoRaices: string = "./assets/imgs/raicesimg.jpg"

  categorias = [
    {id: 'café', title: 'Café'},
    {id: 'cereales', title: 'Cereales'},
    {id: 'lacteos', title: 'Lácteos'},
    {id: 'endulzantes', title: 'Endulzantes'},
  ];
  correo: string = "juanandres1029@gmail.com"
  direccion: string = "Carrera 49A # 48-20"
  instagram: string = ""
  facebook: string = ""
  redes = [
    {
      nombre: "Facebook",
      url: "https://www.facebook.com/raicesmercadosaludable?locale=es_LA",
      icono: "fa fa-facebook-square"
    },
    {
      nombre: "Instagram",
      url: "https://www.instagram.com/raicesmercadosaludable/",
      icono: "fa fa-instagram"
    }
  ]
}