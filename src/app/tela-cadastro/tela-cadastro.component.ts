import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Usuario} from '../models/usuario.model'
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
  
  cadastro: Usuario = new Usuario;
  
  constructor(
    public usuarioService: CadastroService
  ) {}

  ngOnInit(): void {
  }

}
