import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from 'angular2/core';

@Component({
  inputs: ['question'],
  selector: 'question-score',
  template: `
  <p>分值问题控件 - 问题描述： </p>
  <template [ngIf]="isEdit">
    <textarea name="question-tx" id="" cols="30" rows="10" [(ngModel)]="description"></textarea>
    <button (click)="toSave()" class="btn btn-default">保存</button>
    <button (click)="toSave()" class="btn btn-default">设置分值</button>
  </template>
  <template [ngIf]="!isEdit">
    <p>{{question.question}}</p>
    <p class="range-field">
      分值<input type="range" id="test5" min="0" max="100" />
    </p>
    <button type="button" (click)="isEdit=true" class="btn btn-default">编辑</button>
  </template>
  `
})
export class QuestionScore implements OnInit {
  // thread: Thread;
  isEdit: boolean = false;
  // controls: Array[any];
  description: string;

  constructor() {
  }

  toSave() {
    this.isEdit = false;
    this.question.question = this.description;
  }

  ngOnInit(): void {
    this.description = this.question.question;
  }
}