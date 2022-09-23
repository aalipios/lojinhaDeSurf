import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-list4',
  templateUrl: './list4.component.html',
  styleUrls: ['./list4.component.css']
})
export class List4Component implements OnInit {
  public produtos: Produto[] = [] ;

  constructor(private productService: ProdutoService) { }

  getProdutos(): void{
    this.productService.getProdutos().subscribe((produto: any) => {
      this.produtos = produto;
    })
  }

  ngOnInit(): void {
    this.getProdutos();
  }
}
