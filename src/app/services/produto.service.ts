import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiUrl = 'https://localhost:7171';
  
  constructor(private http:HttpClient) { }

  public getProdutos() {
    return this.http.get(`${this.apiUrl}/api/Products`);
  }
}
