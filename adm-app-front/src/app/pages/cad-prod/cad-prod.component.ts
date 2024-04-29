import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { ConfigService } from '../service/config.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cad-prod',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
  ],
  templateUrl: './cad-prod.component.html',
  styleUrl: './cad-prod.component.css',
})
export class CadProdComponent implements OnInit {
  NomeProduto: any = '';
  Valor: any = '';
  Quantidade: any = '';
  Fornecedor: any = '';
  data: any = '';
  Observacao: any = '';

  //  Atribui os inputs as variaveis

  Edata(data: HTMLInputElement) {
    this.data = data.value;
    console.log(data);
  }

  Eprod(NomeProduto: HTMLInputElement) {
    this.NomeProduto = NomeProduto.value;
  }

  Evalor(Valor: HTMLInputElement) {
    this.Valor = Valor.value;
    console.log(this.Valor);
  }

  Equantidade(Quantidade: HTMLInputElement) {
    this.Quantidade = Quantidade.value;
    console.log(this.Quantidade);
  }

  EFornecedor(Fornecedor: HTMLInputElement) {
    this.Fornecedor = Fornecedor.value;
    console.log(this.Fornecedor);
  }

  EObservacao(Observacao: HTMLInputElement) {
    this.Observacao = Observacao.value;
    console.log(this.Observacao);
  }

  constructor(private ConfigService: ConfigService) {}

  enviarDados() {
    const dados = {
      data: this.data,
      NomeProduto: this.NomeProduto,
      Valor: this.Valor,
      Quantidade: this.Quantidade,
      Fornecedor: this.Fornecedor,
      Observacao: this.Observacao,
    };
    this.ConfigService.enviodeDadosApi(dados).subscribe(
      (response) => {
        alert('Dados Enviados com sucesso');
        window.location.reload();
      },
      (error) => {
        let exibir = 'erro ao enviar dados' + error;
        alert(exibir);
      }
    );
  }

  ngOnInit(): void {}
}
