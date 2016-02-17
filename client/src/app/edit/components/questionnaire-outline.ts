import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from 'angular2/core';

@Component({
  inputs: ['naireData'],
  selector: 'questionnaire-outline',
  template: `
  问题大纲
  <ul>
    <li *ngFor="#q of naireData.questionList">
      <a (click)="highlight(q, $event)">
        <i>{{q.type}}</i> -
        {{q.question}}
      </a>
    </li>
  </ul>
  `
})
export class QuestionnaireOutline implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  highlight(question: any, event: any): void {
    /*this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();*/
    console.log('choose question:', question);
    // scroll questionnaire to target
  }
}