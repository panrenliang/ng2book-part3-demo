import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from 'angular2/core';

@Component({
  inputs: ['question'],
  selector: 'question-checkbox',
  template: `
  <p>checkbox问题控件 - 问题描述： </p>
  <template [ngIf]="isEdit">
    <textarea name="question-tx" id="" cols="30" rows="10" [(ngModel)]="description"></textarea>
    <button (click)="toSave()" class="btn btn-default">保存</button>
    <button (click)="toSave()" class="btn btn-default">添加选项</button>
  </template>
  <template [ngIf]="!isEdit">
    <p>{{question.question}}</p>
    <p>
      <input type="checkbox" id="ch1" />
      <label for="ch1">选项一</label>
    </p>
    <p>
      <input type="checkbox" id="ch2" />
      <label for="ch2">选项二</label>
    </p>
    <button type="button" (click)="isEdit=true" class="btn btn-default">编辑</button>
  </template>
  `
})
// <!-- <button (click)="isEdit=true" /> -->
export class QuestionCheckbox implements OnInit {
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