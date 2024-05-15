import { Routes } from '@angular/router';
import { FinanceiroComponent } from './pages/financeiroList/financeiro.component';
import { FinanceiroFormComponent } from './pages/financeiro-form/financeiro-form.component';
import { CadProdComponent } from './pages/cad-prod/cad-prod.component';
import { ListProdComponent } from './pages/list-prod/list-prod.component';
import { CadFuncComponent } from './pages/cad-func/cad-func.component';
import { ListFuncComponent } from './pages/list-func/list-func.component';

export const routes: Routes = [
  { path: 'new_financeiro', component: FinanceiroFormComponent },
  { path: 'list_financeiro', component: FinanceiroComponent },
  { path: 'cad_produtos', component: CadProdComponent },
  { path: 'listar_produtos', component: ListProdComponent },
  { path: 'cadastro_funcionario', component: CadFuncComponent },
  { path: 'lista_funcionarios', component: ListFuncComponent },
];
