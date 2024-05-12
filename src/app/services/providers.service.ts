import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { ProviderI } from 'app/models/provider';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private firestore:Firestore) { }

  getAllProviders(): Observable<ProviderI[]>{
    const providersRef = collection(this.firestore,'marchants');
    return collectionData(providersRef,{idField: 'id'}) as Observable<ProviderI[]>;
   }
   getProviderByID(id: string) {
    const providerRef = doc(this.firestore, `marchants/${id}`);
    return docData(providerRef, { idField: 'id' }) as Observable<ProviderI>;
  }
  

}
