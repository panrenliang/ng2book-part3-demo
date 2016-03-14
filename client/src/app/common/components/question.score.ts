import {Component} from 'angular2/core';

import {QuestionComponent} from './question.component';

@Component({
  inputs:['question','isPublished'],
  outputs:['delQuestionRequest','saveQuestionRequest'],
  selector: 'question-score',
  template: `
  <p>分值题</p>
  <template [ngIf] = "isPublished">
    <p>{{desc}}</p>
    <p class="range-field">
      <label>分值：{{score}}</label>
      <input type="range" [(ngModel)]="score" id="test5" min="0" max="100" />
    </p>
  </template>
  <template [ngIf]="!isPublished && isEdit">
    <input placeholder="请输入问题" [(ngModel)]="desc" required>
    <button type="button" (click)="toSave()" class="btn btn-default">保存</button>
    <button type="button" (click)="toCancel()" class="btn btn-default">取消</button>
  </template>
  <template [ngIf]="!isPublished && !isEdit">
    <p>{{desc}}</p>
    <p class="range-field">
      <label>分值：{{score}}</label>
      <input type="range" disabled="disabled" [(ngModel)]="score" id="test5" min="0" max="100" />
    </p>
    <button type="button" (click)="isEdit=true" class="btn btn-default">编辑</button>
    <button type="button" (click)="toDelete($event)" class="btn btn-default">删除</button>
  </template>
  `
})
export class QuestionScoreCmp extends QuestionComponent {
  score:number;
}
