import { async } from "@angular/core/testing";
import { IUser } from "./../../models/userI";
import { UsersService } from "./../../services/users.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent implements OnInit {
  userId: string;
  user: IUser;
  followers: IUser[] = [];
  following: IUser[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.queryParamMap.get("user");
    console.log(this.userId);
    this.getUserData(this.userId);
  }
  getUserData(id: string) {
    this.userService.getuserByID(id).subscribe((res: IUser) => {
      this.user = res;
      this.getFollowers();
      this.getFollowing();
    });
  }
  getFollowers() {
    this.user.followers.forEach((uid) => {
      this.userService.getuserByID(uid).subscribe((res: IUser) => {
        this.followers.push(res);
      });
    });
  }
  getFollowing() {
    this.user.following.forEach((uid) => {
      this.userService.getuserByID(uid).subscribe((res: IUser) => {
        this.following.push(res);
      });
    });
  }
}
