import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
// import { CounterService } from '../services/counter/counter.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  activeUsers: string[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
  }

  setToInactive(id: number) {
    this.userService.setToInactive(id);
    // this.counterService.incrementActiveToInactive();
  }
}
