import { Router } from '@angular/router';
import { IUser } from './../../models/userI';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users:IUser[] = [];

  constructor(private userService:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res:IUser[])=>{
      this.users = res;
    });
  }
  openDetails(user:IUser){
    this.router.navigate(
      ['/user/details'],
      { queryParams: { user: user.id } }
    );

  }

}
