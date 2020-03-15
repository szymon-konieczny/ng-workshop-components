import { Component, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  public name = 'Leon';
  public users: User[] = [
    {
      id: 'a1',
      name: 'Adam',
      role: 'admin',
    },
    {
      id: 'b2',
      name: 'Damian',
      role: 'admin',
    },
    {
      id: 'c3',
      name: 'Patrycja',
      role: 'tester',
    },
    {
      id: 'd4',
      name: 'Ania',
      role: 'manager',
    },
  ];

  public onUserUpdate(userConfig: User) {
    this.users = this.users.map((user) => {
      return user.id === userConfig.id ? userConfig : user;
    });
  }
}
