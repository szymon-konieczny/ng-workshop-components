import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnChanges {
  @Input() public name: string;
  @Input() public users: User[];

  @Output() public usersChange = new EventEmitter<Partial<User>>();

  public showName = true;
  public usersCache: User[];

  public userUpdateConfig: Partial<User> = {
    name: 'Roman',
    role: 'user',
  };

  public ngOnChanges(changes: SimpleChanges) {
    const { firstChange, currentValue } = changes.users;

    if (firstChange) {
      this.usersCache = currentValue;
    }

    console.log('changes', changes);
  }

  public updateUser(id: string) {
    const userConfig: Partial<User> = { ...this.userUpdateConfig, id };
    this.usersChange.emit(userConfig);
  }

  public toggleName() {
    this.showName = !this.showName;
  }

  public trackById(index: number, user: User): string {
    return user.id;
  }
}
