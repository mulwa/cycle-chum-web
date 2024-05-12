import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { ProviderDetailsComponent } from './provider-details/provider-details.component';


@NgModule({
  declarations: [
    ProvidersListComponent,
    ProviderDetailsComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule
  ]
})
export class ProvidersModule { }
