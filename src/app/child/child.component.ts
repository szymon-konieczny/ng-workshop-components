import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() public name: string;
  @Input() public users: User[];

  @Output() public nameChange = new EventEmitter<string>();

  public showName = true;
  public newName = 'Andrzej';

  public updateName() {
    this.nameChange.emit(this.newName);
  }

  public toggleName() {
    this.showName = !this.showName;
  }
}
