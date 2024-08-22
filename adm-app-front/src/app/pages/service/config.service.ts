import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient
  ) { }


    url: string = 'http://localhost:8888/'

// metodo post

  enviodeDadosApi(dados: any): Observable<any>{
    return this.http.post<any>(`${this.url}addProduto`, dados)
  }

  enviarDadosPessoal(dados: any): Observable<any>{
    return this.http.post<any>(`${this.url}addPessoa`, dados)
  }

  enviarDadosCargo(dadosCargo: any): Observable<any>{
    return this.http.post<any>(`${this.url}addCargo`, dadosCargo)
  }


  envioFinanceiroApi(dados:any): Observable<any>{
    return this.http.post<any>(`${this.url}addFinanceiro`, dados)
  }

  // Metodos Delete

  deletarDadosApi(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}deleteProduto/${id}`)
  }

  deletarFinanceiro(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}deleteFinanceiro/${id}`)
  }

  deletarPessoal(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}deletePessoal/${id}`)
  }

  deleteCargo(id:number): Observable<any>{
    return this.http.delete<any>(`${this.url}deleteCargo/${id}`)
  }

  // Metodos Update

  atualizarDados(id: number, novosDados: any): Observable<any> {
    return this.http.put(`${this.url}updateProduto/${id}`, novosDados);
  }

  atuallizarFinanceiro(id:number, novosDados: any): Observable<any>{
    return this.http.put(`${this.url}updateFinanceiro/${id}`, novosDados)
  }

  atualizarPessoal (id: number, novosDados: any): Observable<any>{
    return this.http.put(`${this.url}updatePessoal/${id}`, novosDados)
  }

  atualizarCargo(id:number, novosDados: any): Observable<any>{
    return this.http.put(`${this.url}updateCargo/${id}`, novosDados)
  }

  // Metodos Get by Id

  exibirDadosApi(id:number): Observable<any>{
    return this.http.get<any>(`${this.url}getProduto/${id}`)
  }

  exibirFinanceiro(id:number): Observable<any>{
    return this.http.get<any>(`${this.url}Financeiro/${id}`)
  }

  exibirPessoal(id:number): Observable<any>{
    return this.http.get(`${this.url}pessoal/${id}`)
  }

  exibirCargo(id:number): Observable<any>{
    return this.http.get(`${this.url}Cargo/${id}`)
  }
}
