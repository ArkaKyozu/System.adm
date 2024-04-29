import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConfigService } from '../service/config.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-financeiro',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
  ],
  templateUrl: './financeiro.component.html',
  styleUrl: './financeiro.component.css',
})
export class FinanceiroComponent implements OnInit {
  dadosApi: any = [];

  constructor(private ConfigService: ConfigService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('http://localhost:3000/getAllFinanceiro')
      .subscribe((data) => {
        this.dadosApi = data;
        console.log('Dados Api: ', this.dadosApi);
      });
  }

  deletarFinanceiro(id: number) {
    this.ConfigService.deletarFinanceiro(id).subscribe(
      () => {
        alert('Dados apagados com Sucesso !');
        window.location.reload();
      },
      (error) => {
        console.log('Erro ao apagar item', error);
      }
    );
  }

  dadosEditado: any = {};

  exibirItemId(id: number) {
    this.ConfigService.exibirFinanceiro(id).subscribe(
      (response) => {
        console.log('exibindo', response);
        this.dadosEditado = response;
      },
      (error) => {
        console.error('erro ao exibir Dados', error);
      }
    );
  }

  atualizarItem(id: number){
    this.ConfigService.atuallizarFinanceiro(id, this.dadosEditado).subscribe(
      (response) => {
        console.log('atualizando', response)
        alert('item atualizado com sucesso')
        window.location.reload()
      },
      (error) =>{
        console.error("não foi possivel atualizar", error)
      }
    )
  }
}
