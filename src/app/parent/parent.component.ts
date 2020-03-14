import { Component } from '@angular/core';
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
      name: 'Adam',
      role: 'user',
    },
    {
      name: 'Damian',
      role: 'admin',
    },
    {
      name: 'Patrycja',
      role: 'tester',
    },
    {
      name: 'Ania',
      role: 'manager',
    },
  ];

  public onNameUpdate(newName: string) {
    this.name = newName;
  }
}
