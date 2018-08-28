import { Injectable } from '@angular/core';
import { CounterService } from '../counter/counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private counterService: CounterService) { }

  activeUsers: string[] = ['anokha1', 'anokha2', 'anokha3'];
  inactiveUsers: string[] = ['kumar1', 'kumar2', 'kumar3'];

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }
}
