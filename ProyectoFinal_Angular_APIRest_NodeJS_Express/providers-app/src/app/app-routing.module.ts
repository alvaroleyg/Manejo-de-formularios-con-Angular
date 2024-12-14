import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersTableComponent } from './components/providers-table/providers-table.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { EditProviderComponent } from './components/edit-provider/edit-provider.component';

const routes: Routes = [
  { path: 'providers', component: ProvidersTableComponent },
  { path: 'add-provider', component: AddProviderComponent },
  { path: 'edit-provider/:cif', component: EditProviderComponent },
  { path: '**', redirectTo: '/providers' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
