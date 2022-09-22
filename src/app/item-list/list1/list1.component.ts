import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {
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
