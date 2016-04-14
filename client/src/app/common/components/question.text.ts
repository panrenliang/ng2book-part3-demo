import {Component} from 'angular2/core';

import {QuestionComponent} from './question.component';

@Component({
  inputs:['question','isPublished','isEdit'],
  outputs:['delQuestionRequest'],
  selector: 'question-text',
  template: `
  <p>问答题</p>
  <template [ngIf] = "isPublished">
    <p>{{desc}}</p>
    <input placeholder="请输入问题的答案" [(ngModel)]="answer">
  </template>
  <template [ngIf]="!isPublished && isEdit">
    <input placeholder="请输入问题" [(ngModel)]="desc" required>
    <button type="button" (click)="toSave()" class="btn btn-default">保存</button>
    <button type="button" (click)="toCancel()" class="btn btn-default">取消</button>
  </template>
  <template [ngIf]="!isPublished && !isEdit">
    <p>{{desc}}</p>
    <input placeholder="请输入问题的答案" disabled="disabled" [(ngModel)]="answer">
    <button type="button" (click)="isEdit=true" class="btn btn-default">编辑</button>
    <button type="button" (click)="toDelete($event)" class="btn btn-default">删除</button>
  </template>
  `
})
export class QuestionTextCmp extends QuestionComponent {
}
