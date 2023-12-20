import {
  Component,
  EventEmitter,
  Input,
  Output,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input({ required: true, transform: numberAttribute })
  id!: number;

  @Input({ required: true })
  content!: string;

  @Input({ required: true })
  type!: 'Home' | 'Work' | 'Other';

  @Input({ required: true })
  state!: 'None' | 'Doing' | 'Finish';
  @Output()
  stateChange = new EventEmitter<'None' | 'Doing' | 'Finish'>();

  totalCount = 10;

  finishCount = 3;

  onSetState(state: 'None' | 'Doing' | 'Finish'): void {
    this.stateChange.emit(state);
  }
}
