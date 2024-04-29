import {
  Component,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '../service/config.service';


@Component({
  selector: 'app-list-prod',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-prod.component.html',
  styleUrl: './list-prod.component.css',
})
export class ListProdComponent implements OnInit {
  constructor(
    private ConfigService: ConfigService,
    private http: HttpClient
  ) {}

  dados: any = [];
  dadosApi: any = [];

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:3000/getAllProduto')
      .subscribe((data) => {
        this.dadosApi = data;
        console.log('Dados da API:', this.dadosApi);
      });
  }

  excluirItem(id: number) {
    this.ConfigService.deletarDadosApi(id).subscribe(
      () => {
        alert('Dados excluídos com sucesso!');
        // Atualizar a interface ou realizar outras ações necessárias
        window.location.reload();
      },
      (error) => {
        console.error('Erro ao excluir os dados', error);
      }
    );
  }

  dadosEditados: any = '';

  atualizarItem(id: number){
    this.ConfigService.atualizarDados(id, this.dadosEditados).subscribe(
      (response) => {
        // Tratar a resposta, se necessário
        console.log('atualizado', response);
        alert('item atualizado com sucesso')
        window.location.reload()
      },
      (error) => {
        console.error('Erro ao atualizar os dados', error);
      }
    );
  }

  exibirItemId(id: number) {
    this.ConfigService.exibirDadosApi(id).subscribe(
      (response) => {
        console.log('Exibindo', response);
        this.dadosEditados = response;
      },
      (error) => {
        console.error('Erro ao exibir os dados', error);
      }
    );
  }
}
