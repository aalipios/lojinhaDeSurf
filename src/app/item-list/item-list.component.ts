import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
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
