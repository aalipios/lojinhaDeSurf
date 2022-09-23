import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {
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
