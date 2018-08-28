import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  inactiveUsers: string[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  setToActive(id: number) {
    this.userService.setToActive(id);
  }

}
