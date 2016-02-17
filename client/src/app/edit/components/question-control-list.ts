import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from 'angular2/core';

import {DataService} from '../data.service';

@Component({
  // inputs: ['thread'],
  selector: 'question-control-list',
  template: `
  问题控件
  <ul>
    <li *ngFor="#q of controls">
      <a (click)="addQuestion(q, $event)">{{q.label}}</a>
    </li>
  </ul>
  `
})
export class QuestionControlList implements OnInit {
  // thread: Thread;
  selected: boolean = false;
  // controls: Array[any];

  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.controls = [
      {type: 'text', label: '文本问题'},
      {type: 'radio', label: 'Radio 问题'},
      {type: 'checkbox', label: 'Checkbox 问题'},
      {type: 'score', label: '分值问题'}
    ];
  }

  ngOnInit(): void {
    /*this.threadsService.currentThread
      .subscribe( (currentThread: Thread) => {
        this.selected = currentThread &&
          this.thread &&
          (currentThread.id === this.thread.id);
      });*/
  }

  addQuestion(control: any, event: any): void {
    /*this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();*/
    console.log('add question:', control);
    this.dataService.addQuestionTemp(control);
  }
}