import { IUser } from './../models/userI';
import { Injectable } from '@angular/core';
// import {} from ''
import {Firestore,addDoc, collection, collectionData, doc, docData, deleteDoc,updateDoc, DocumentReference,setDoc} from '@angular/fire/firestore'
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 

  constructor(private firestore:Firestore) {

   }
   getAllUsers(): Observable<IUser[]>{
    const usersRef = collection(this.firestore,'users');
    return collectionData(usersRef,{idField: 'id'}) as Observable<IUser[]>;
   }
   getuserByID(id: string) {
    const userRef = doc(this.firestore, `users/${id}`);
    return docData(userRef, { idField: 'id' }) as Observable<IUser>;
  }
}
