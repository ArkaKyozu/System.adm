import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfigService } from '../service/config.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-financeiro-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './financeiro-form.component.html',
  styleUrl: './financeiro-form.component.css',
})


export class FinanceiroFormComponent {

  Data: any = '';
  GastoDiario: any = '';
  FaturamentoCard: any = '';
  FaturamentoPix: any = '';
  FaturamentoCedula: any = ''



  //  Atribui os inputs as variaveis


  Edata(Data: HTMLInputElement){
    this.Data = Data.value;
    console.log(this.Data)
  }

  Esaida( GastoDiario: HTMLInputElement){
    this.GastoDiario = GastoDiario.value;
    console.log(this.GastoDiario)
  }

  Ecartao(FaturamentoCard: HTMLInputElement){
    this.FaturamentoCard = FaturamentoCard.value;
    console.log(this.FaturamentoCard)
  }

  Epix(FaturamentoPix:HTMLInputElement){
    this.FaturamentoPix = FaturamentoPix.value;
    console.log(this.FaturamentoPix)
  }

  Edinheiro(FaturamentoCedula: HTMLInputElement){
    this.FaturamentoCedula = FaturamentoCedula.value
    console.log(this.FaturamentoCedula)
  }

  constructor(private ConfigService: ConfigService){}

  cadastrarFinanceiro(){
   const dados = {
    Data: this.Data,
    GastoDiario: this.GastoDiario,
    FaturamentoCard: this.FaturamentoCard,
    FaturamentoPix: this.FaturamentoPix,
    FaturamentoCedula: this.FaturamentoCedula,
   };
   this.ConfigService.envioFinanceiroApi(dados).subscribe(
    (response) => {
      alert('dados enviados com sucesso');
      window.location.reload()

    },
    (error) => {
      console.log('erro ao enviar dados'+ error);
    }
   );
  }

}

