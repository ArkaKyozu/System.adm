import { Routes } from '@angular/router';
import { FinanceiroComponent } from './pages/financeiroList/financeiro.component';
import { FinanceiroFormComponent } from './pages/financeiro-form/financeiro-form.component';
import { CadProdComponent } from './pages/cad-prod/cad-prod.component';
import { ListProdComponent } from './pages/list-prod/list-prod.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CadFuncComponent } from './pages/cad-func/cad-func.component';
import { ListFuncComponent } from './pages/list-func/list-func.component';


export const routes: Routes = [
  {path: 'main', redirectTo: 'list_financeiro'},
  {path: 'list_financeiro' , component: FinanceiroComponent},
  {path: 'new_financeiro', component: FinanceiroFormComponent},
  {path: 'cad_produtos', component: CadProdComponent},
  {path: 'listar_produtos', component: ListProdComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cadastro_funcionario', component: CadFuncComponent},
  {path: 'lista_funcionarios', component: ListFuncComponent},
];
