import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../service/config.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-list-func',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-func.component.html',
  styleUrl: './list-func.component.css',
})
export class ListFuncComponent implements OnInit {
  dadosPessoalApi: any = [];
  dadosCargoApi: any = [];

  constructor(private http: HttpClient, private ConfigService: ConfigService) {}

  ngOnInit(): void {
    this.http
      .get<any>('http://localhost:3000/getAllCargo')
      .subscribe((data) => {
        this.dadosCargoApi = data;
        console.log('Dados api Cargo', this.dadosCargoApi);
      });
    this.http
      .get<any>('http://localhost:3000/getAllPessoal')
      .subscribe((response) => {
        this.dadosPessoalApi = response;
        console.log('Dados da Api', this.dadosPessoalApi);
      });
  }

  dadosExibidos: any = {};

  exibirFunc(id: number) {
    this.ConfigService.exibirPessoal(id).subscribe(
      (response) => {
        console.log('Pessoal', response);
        this.dadosExibidos = response;
      },
      (erro) => {
        console.error('Erro ao exibir os dados', erro);
      }
    );
  }

  dadosExibidosCargo: any = {};

  exibirCargo(id: number) {
    this.ConfigService.exibirCargo(id).subscribe(
      (response) => {
        console.log('Cargo', response);
        this.dadosExibidosCargo = response;
      },
      (error) => {
        console.error('Não foi possivel exibir o dado', error);
      }
    );
  }

  // edição dos dados

  yteste: boolean = true;
  btns: boolean = false;
  butao: string = 'Editar';

  editar() {
    if (this.yteste === true) {
      this.yteste = false;
      this.butao = 'Cancelar';
    } else {
      this.yteste = true;
      this.butao = 'Editar';
    }

    if (this.yteste === false) {
      this.btns = true;
    } else {
      this.btns = false;
    }
  }

  UpdateDadosPessoal(id: number) {
    this.ConfigService.atualizarPessoal(id, this.dadosExibidos).subscribe(
      (response) => {
        console.log('Dados Atualizados', response);
        this.yteste = true;
        this.butao = 'Editar'
      },
      (error) => {
        console.log('Não foi possivel atualizar os dados', error);
      }
    );
  }

  updateCargo(id:number){
    this.ConfigService.atualizarCargo(id,this.dadosExibidosCargo).subscribe(
      (response) => {
        console.log('Dados Atualizados', response);
      },
      (error) => {
        console.log('Não foi possivel atualizar os dados', error);
      }
    )
  }

  deletarPessoal(id:number){
    this.ConfigService.deletarPessoal(id).subscribe(
      () => {
        console.log('Profissional excluido com sucesso!');
        window.location.reload()
      },
      (error) => {
        console.log('Erro ao apagar item', error);
      }
    )
  }
}
