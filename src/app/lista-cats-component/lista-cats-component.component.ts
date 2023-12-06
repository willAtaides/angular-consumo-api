import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-lista-cats',
  templateUrl: './lista-cats-component.component.html',
  styleUrls: ['./lista-cats-component.component.css']
})
export class ListaCatsComponent implements OnInit {
  listaDeGatos: any[] = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.carregarListaDeGatos();
  }

  carregarListaDeGatos(): void {
    this.catService.getListaDeGatos().subscribe(
      data => {
        this.listaDeGatos = data;
      },
      error => {
        console.error('Erro ao carregar a lista de gatos:', error);
      }
    );
  }
}
