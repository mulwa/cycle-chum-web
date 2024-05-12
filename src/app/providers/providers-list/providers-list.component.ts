import { ProvidersService } from './../../services/providers.service';
import { Component, OnInit } from '@angular/core';
import { ProviderI } from 'app/models/provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss']
})
export class ProvidersListComponent implements OnInit {
  providers:ProviderI[];
  providerId:string;

  constructor(private providerService:ProvidersService, private router:Router) { }

  ngOnInit(): void {
    this.getAllProviders();
  }
  getAllProviders(){
    this.providerService.getAllProviders().subscribe((res:ProviderI[])=>{
      this.providers = res;
    });
  }
  openDetails(provider:ProviderI){
    this.router.navigate(
      ['/provider/details'],
      { queryParams: { provider: provider.uid } }
    );
  }

}
