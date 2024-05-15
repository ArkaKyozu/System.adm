import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  StepperOrientation,
  MatStepperModule,
} from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ConfigService } from '../service/config.service';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@Component({
  selector: 'app-cad-func',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
    MatCardModule,
    MatSelectModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './cad-func.component.html',
  styleUrl: './cad-func.component.css',
})
export class CadFuncComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    NomeCargo: ['', Validators.required],
    DataAdmissao: ['', Validators.required],
    Contrato: ['', Validators.required],
    Remuneracao: ['', Validators.required],
    Jornada: ['', Validators.required],
    Descricao: [''],
    selected: [''],
  });

  secondFormGroup = this._formBuilder.group({
    CPF: ['', Validators.required],
    Nome: ['', Validators.required],
    Email: ['', Validators.required],
    EstadoCivil: [''],
    RG: ['', Validators.required],
    DataNascimento: ['', Validators.required],
    Contato: ['', Validators.required],
    Endereco: ['', Validators.required],
    Cidade: ['', Validators.required],
    Banco: ['', Validators.required],
    ag_conta: ['', Validators.required],
    PISPASEP: ['', Validators.required],
    cargoId: [],
  });

  // adicionar envio de documentos posteriormente

  thirdFormGroup = this._formBuilder.group({
    profile: ['', Validators.required],
    docCPF: ['', Validators.required],
    CTPS: ['', Validators.required],
    reservista: ['', Validators.required],
    comprovanteResidencia: ['', Validators.required],
    certificadoFormação: ['', Validators.required]
  });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private ConfigService: ConfigService,
    private http: HttpClient
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  //Busca todos os dados do cargo
  dadosCargo: any = [];

  ngOnInit(): void {
    this.http
      .get<any>('http://localhost:3000/getAllCargo')
      .subscribe((data) => {
        this.dadosCargo = data;
        this.dadosCargo.push({ id: 'novo', NomeCargo: 'cadastrar' });
        console.log('Dados API:', this.dadosCargo);
      });
  }

  //Cadastra cargos
  cadastroCargo() {
    if (this.firstFormGroup.valid) {
      const dados = this.firstFormGroup.value;
      this.ConfigService.enviarDadosCargo(dados).subscribe(
        (response) => {
          console.log('Dados Enviados com Sucesso', response);
        },
        (error) => {
          console.log('dados não enviados',error)
            alert('Os Dados não podem ser enviados, por favor revise os campos')
        }
      );
    }
  }

  btns: boolean = true; // variante para mudar a classe da div

  //Detalha o cargo selecionado

  cargoSelecionado: any = [];

  preencherCamposDoFormulario(Id: number) {
    this.cargoSelecionado = this.dadosCargo.find(
      (cargo: { id: number }) => cargo.id === Id
    );

    if (this.cargoSelecionado.id === 'novo') {
      this.btns = false;
      console.log('cadastrar novo dado');
      this.firstFormGroup.patchValue({
        NomeCargo: '',
        Remuneracao: '',
        Contrato: '',
        Jornada: '',
        Descricao: '',
        DataAdmissao: '',
      });
    } else {
      this.btns = true;
      this.firstFormGroup.patchValue({
        NomeCargo: this.cargoSelecionado.NomeCargo,
        Remuneracao: this.cargoSelecionado.Remuneracao,
        Contrato: this.cargoSelecionado.Contrato,
        Jornada: this.cargoSelecionado.Jornada,
        Descricao: this.cargoSelecionado.Descricao,
        DataAdmissao: this.cargoSelecionado.DataAdmissao,
      });
      console.log(this.cargoSelecionado);
      this.secondFormGroup.patchValue({
        cargoId: this.cargoSelecionado.id,
      });
    }
  }

  //Cadastrar Pessoal

  enviarDadosPessoal() {
    if (this.secondFormGroup.valid) {
      const dadosPessoal = this.secondFormGroup.value;
      this.ConfigService.enviarDadosPessoal(dadosPessoal).subscribe(
        (response) => {
          alert('Profissional cadastrado com Sucesso');
        },
        (error) => {
          console.log('Dados Não Enviados', error);
        }
      );
    }
  }

  // atualizar compo cargoId apos cadastrar um novo item

  cargoAtualizado: any = [];

  atualizarConteudo() {
    setTimeout(() => {
      this.http.get<any>('http://localhost:3000/getAllCargo').subscribe(
        (data) => {
          this.cargoAtualizado = data;
          console.log('cargo atualiazdo', this.cargoAtualizado);
          if (this.cargoSelecionado.id === 'novo') {
            const ultimoItem = this.cargoAtualizado.pop();
            console.log('ultimp item', ultimoItem);
            this.secondFormGroup.patchValue({
              cargoId: ultimoItem.id,
            });
          }
        },
        (error) => {
          console.error('Erro ao buscar dados:', error);
        }
      );
    }, 1000);
  }
}
