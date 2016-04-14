import { Component, OnInit, ChangeDetectionStrategy,EventEmitter } from 'angular2/core';
import { QuestionType } from '../../models/question.model';

@Component({
  // inputs: ['thread'],
  outputs:['addQuestionRequest'],
  selector: 'questionnaire-controls',
  template: `
  <ul>
    <li *ngFor="#q of controls">
      <a href="javascript:;" (click)="addQuestion(q, $event)">{{q.label}}</a>
    </li>
  </ul>
  `
})
export class QuestionControlList implements OnInit {
  private controls:any[];
  private addQuestionRequest:EventEmitter<any> = new EventEmitter();
  constructor() {
    this.controls = [
      {type: QuestionType.Text, label: '文本问题'},
      {type: QuestionType.SingleSelect, label: 'Radio 问题'},
      {type: QuestionType.MultiSelect, label: 'Checkbox 问题'},
      {type: QuestionType.Score, label: '分值问题'}
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

    this.addQuestionRequest.emit(control.type);
  }
}
