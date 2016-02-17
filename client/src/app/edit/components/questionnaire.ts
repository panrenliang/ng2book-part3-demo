import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from 'angular2/core';

import {DataService} from '../data.service';

import {QuestionText} from './question-text';
import {QuestionScore} from './question-score';
import {QuestionCheckbox} from './question-checkbox';
import {QuestionRadio} from './question-radio';

@Component({
  inputs: ['naireData'],
  selector: 'questionnaire',
  directives: [QuestionCheckbox, QuestionScore, QuestionText, QuestionRadio],
  template: `
  问卷详情
  <p>{{naireData.starter}}</p>
  <hr />
  <ul>
    <li *ngFor="#q of naireData.questionList" [ngSwitch]="q.type">
      <template [ngSwitchWhen]="'text'">
        <question-text [question]="q"></question-text>
      </template>

      <template [ngSwitchWhen]="'score'">
        <question-score [question]="q"></question-score>
      </template>

      <template [ngSwitchWhen]="'checkbox'">
        <question-checkbox [question]="q"></question-checkbox>
      </template>

      <template [ngSwitchWhen]="'radio'">
        <question-radio [question]="q"></question-radio>
      </template>
      <template ngSwitchDefault>Unknown: {{q.type}}</template>
    </li>
  </ul>
  <hr />
  <p>{{naireData.ending}}</p>
  `
})
export class Questionnaire implements OnInit {
  // thread: Thread;
  selected: boolean = false;
  // controls: Array[any];

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    /*this.threadsService.currentThread
      .subscribe( (currentThread: Thread) => {
        this.selected = currentThread &&
          this.thread &&
          (currentThread.id === this.thread.id);
      });*/
  }

  doPublish(): void {

  }
}