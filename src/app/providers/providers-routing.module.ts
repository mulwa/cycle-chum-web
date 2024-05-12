import { ProviderDetailsComponent } from './provider-details/provider-details.component';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:ProvidersListComponent},
  {path:'providers/details', component: ProviderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }
