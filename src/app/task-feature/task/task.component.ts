import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  content = '建立待辦事項元件';

  state: 'None' | 'Doing' | 'Finish' = 'None';

  type: 'Home' | 'Work' | 'Other' = 'Work';

  fontSize = 30;

  className = 'home';

  color = 'green';

  totalCount = 10;

  finishCount = 3;

  onSetState(state: 'None' | 'Doing' | 'Finish'): void {
    this.state = state;
  }
}
